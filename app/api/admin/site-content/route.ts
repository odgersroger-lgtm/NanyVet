import {guard} from '@/lib/access';
import {readContent} from '@/lib/repository';
import {saveDocument} from '@/lib/platform';
import {schema} from '@/lib/content';
export const dynamic='force-dynamic';
export async function GET(){const denied=await guard();if(denied)return denied;return Response.json(await readContent(),{headers:{'Cache-Control':'no-store'}})}
export async function PUT(req:Request){const denied=await guard(req);if(denied)return denied;try{const body=await req.text();if(body.length>1000000)return Response.json({error:'El contenido supera el tamaño máximo'},{status:413});const parsed=schema.safeParse(JSON.parse(body));if(!parsed.success)return Response.json({error:'Revisa los campos: '+parsed.error.issues.map(i=>i.path.join('.')+': '+i.message).join('; ')},{status:400});await saveDocument(parsed.data);return Response.json({ok:true})}catch{return Response.json({error:'No se pudieron guardar los cambios. Inténtalo nuevamente.'},{status:500})}}
