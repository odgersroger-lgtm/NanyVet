# Panel NanyVet en Vercel

1. Crea un proyecto gratuito en Supabase.
2. Abre el SQL Editor, ejecuta `setup.sql` y espera a que finalice.
3. En Authentication > Providers, confirma que Email está habilitado.
4. En Authentication > Email Templates, usa la variable `{{ .Token }}` en el correo de confirmación para enviar el código de acceso.
5. En Vercel > Project Settings > Environment Variables, crea estas variables para Production y Preview:

   - `SUPABASE_URL`: Project URL de Supabase.
   - `SUPABASE_ANON_KEY`: Publishable / anon key de Supabase.
   - `SUPABASE_SERVICE_ROLE_KEY`: service_role key de Supabase. Debe mantenerse secreta.
   - `STORAGE_BUCKET`: `nanyvet`.
   - `NANYVET_ADMIN_EMAIL`: correo único autorizado para entrar al panel.

6. Redeploya el proyecto desde Vercel.

Luego entra a `/admin` usando el correo autorizado. El panel guarda textos, reseñas, preguntas y fotos sin crear un commit en GitHub.
