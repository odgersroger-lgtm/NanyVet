import type {Metadata} from 'next';
import './globals.css';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://nanyvet.vercel.app';
export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{
    default:'Clínica Veterinaria NanyVet en Concepción | Atención cercana',
    template:'%s | Clínica Veterinaria NanyVet',
  },
  description:'Clínica Veterinaria NanyVet en Concepción. Atención para perros y gatos, servicios veterinarios, peluquería, productos para mascotas, agenda online y contacto por WhatsApp.',
  keywords:['Clínica Veterinaria NanyVet','veterinaria en Concepción','veterinaria NanyVet','veterinaria perros y gatos','peluquería canina Concepción','productos para mascotas Concepción'],
  alternates:{canonical:'/'},
  openGraph:{
    title:'Clínica Veterinaria NanyVet en Concepción',
    description:'Atención veterinaria cercana para perros y gatos en Concepción. Agenda tu hora o consulta por WhatsApp.',
    url:'/',
    siteName:'Clínica Veterinaria NanyVet',
    locale:'es_CL',
    type:'website',
  },
  twitter:{
    card:'summary',
    title:'Clínica Veterinaria NanyVet en Concepción',
    description:'Atención veterinaria cercana para perros y gatos en Concepción. Agenda tu hora o consulta por WhatsApp.',
  },
  robots:{
    index:true,
    follow:true,
    googleBot:{
      index:true,
      follow:true,
      'max-image-preview':'large',
      'max-snippet':-1,
      'max-video-preview':-1,
    },
  },
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html>}
