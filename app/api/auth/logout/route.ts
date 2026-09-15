import {cookies} from 'next/headers';
export async function GET(req:Request){(await cookies()).delete('nanyvet_session');return Response.redirect(new URL('/',req.url),303)}
