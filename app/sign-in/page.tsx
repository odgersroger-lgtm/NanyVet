import Login from './login';
export const dynamic='force-dynamic';
export default function Page(){return <main className="auth-screen"><div className="auth-card"><span className="admin-brand">NanyVet Admin</span><h1>Bienvenido de vuelta.</h1><p>Inicia sesión con tu cuenta autorizada para cuidar cada detalle del sitio.</p><Login/><a href="/" className="back-home">Volver al inicio</a></div></main>}
