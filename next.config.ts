import type {NextConfig} from 'next';

const securityHeaders = [
  {key:'X-Content-Type-Options',value:'nosniff'},
  {key:'X-Frame-Options',value:'SAMEORIGIN'},
  {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
  {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},
  {key:'Strict-Transport-Security',value:'max-age=31536000; includeSubDomains'},
  {key:'Content-Security-Policy',value:"default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-src https://www.google.com https://maps.google.com; upgrade-insecure-requests"},
];

const config:NextConfig={
  async headers(){return [{source:'/(.*)',headers:securityHeaders}]},
};
export default config;
