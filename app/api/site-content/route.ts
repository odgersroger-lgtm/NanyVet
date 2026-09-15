import {readContent} from '@/lib/repository';
export const dynamic='force-dynamic';
export async function GET(){try{return Response.json(await readContent(true),{headers:{'Cache-Control':'no-store'}})}catch{return Response.json({error:'No se pudo cargar el contenido'},{status:503})}}
