import {redirect} from 'next/navigation';
import {access} from '@/lib/access';
import {readContent} from '@/lib/repository';
import {authMode} from '@/lib/platform';
import Editor from './editor';
export const dynamic='force-dynamic';
export default async function Page(){const a=await access();if(!a.authenticated)redirect('/sign-in');const logout=authMode==='sites'?'/signout-with-chatgpt?return_to=/':'/api/auth/logout';if(!a.authorized)return <main className="auth-screen"><div className="auth-card"><h1>Acceso Denegado</h1><p>No tienes los permisos necesarios para acceder al panel de administración de NanyVet.</p><a className="button" href="/">Volver al inicio</a><a className="button outline" href={logout}>Cerrar sesión</a></div></main>;return <Editor initial={await readContent()} logout={logout}/>}
