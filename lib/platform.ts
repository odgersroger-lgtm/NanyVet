// Native Next/Vercel adapter; Sites builds alias this module to platform-sites.ts.
import {cookies} from 'next/headers';
export const authMode:string='supabase';
export function setting(k:string){return process.env[k]||''}
function configured(){return Boolean(setting('SUPABASE_SERVICE_ROLE_KEY')&&setting('SUPABASE_URL'))}
async function api(path:string,init:RequestInit={}){const key=setting('SUPABASE_SERVICE_ROLE_KEY'),base=setting('SUPABASE_URL');if(!key||!base)throw Error('Falta configurar Supabase');return fetch(base+path,{...init,cache:'no-store',headers:{apikey:key,Authorization:'Bearer '+key,'Content-Type':'application/json',...init.headers}})}
export async function currentEmail(){if(!configured())return null;const token=(await cookies()).get('nanyvet_session')?.value;if(!token)return null;const r=await api('/auth/v1/user',{headers:{Authorization:'Bearer '+token}});if(!r.ok)return null;const u=await r.json();return u.email_confirmed_at?u.email:null}
export async function loadDocument(){if(!configured())return null;const r=await api('/rest/v1/site_content?id=eq.nanyvet&select=content');if(!r.ok)throw Error('No se pudo leer el contenido');return (await r.json())[0]?.content||null}
export async function saveDocument(content:unknown,initialize=false){if(!configured())return;const r=await api('/rest/v1/site_content?on_conflict=id',{method:'POST',headers:{Prefer:'resolution='+(initialize?'ignore-duplicates':'merge-duplicates')},body:JSON.stringify({id:'nanyvet',content})});if(!r.ok)throw Error('No se pudo guardar el contenido')}
export async function reserveUpload(key:string,_type:string){if(!configured())throw Error('El panel requiere configurar Supabase para cargar imágenes en Vercel');const bucket=setting('STORAGE_BUCKET')||'nanyvet';const r=await api('/storage/v1/object/upload/sign/'+bucket+'/'+key,{method:'POST',body:'{}'});if(!r.ok)throw Error('No se pudo autorizar la carga');const d=await r.json();return {uploadUrl:setting('SUPABASE_URL')+'/storage/v1'+d.url,method:'PUT',direct:true,url:setting('SUPABASE_URL')+'/storage/v1/object/public/'+bucket+'/'+key}}
export async function putImage(_key:string,_bytes:ArrayBuffer,_type:string){throw Error('Utiliza la URL de carga directa')}
export async function getImage(key:string){return Response.redirect(setting('SUPABASE_URL')+'/storage/v1/object/public/'+(setting('STORAGE_BUCKET')||'nanyvet')+'/'+key,302)}
