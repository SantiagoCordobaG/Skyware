# Skyware

Landing page profesional para Skyware, enfocada en presentar servicios de paginas web, landing pages, automatizaciones e inteligencia artificial para emprendedores y negocios locales.

Repositorio: [SantiagoCordobaG/Skyware](https://github.com/SantiagoCordobaG/Skyware)

## Tecnologias

- React
- Vite
- Tailwind CSS
- Lucide React

## Caracteristicas

- Diseno responsive para desktop y mobile.
- Hero con llamadas a la accion hacia WhatsApp.
- Secciones de servicios, beneficios, proceso, planes, prueba social, preguntas frecuentes y CTA final.
- Contenido centralizado en archivos de `src/data`.
- Configuracion de marca, SEO y datos de contacto en `src/config`.
- Logo SVG personalizado de Skyware.
- Efecto spotlight en las cards destacadas del hero.

## Estructura

```txt
Skyware/
  skyware-landing/
    src/
      components/
      config/
      data/
      styles/
    public/
    package.json
```

## Instalacion

```bash
cd skyware-landing
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicacion se abre normalmente en `http://localhost:5173/`. Si ese puerto esta ocupado, Vite usara el siguiente disponible.

## Scripts

```bash
npm run dev      # Levanta el servidor local
npm run build    # Genera la version de produccion
npm run preview  # Previsualiza el build
npm run lint     # Revisa errores de lint
```

## Personalizacion

- Marca, colores, contacto y WhatsApp: `skyware-landing/src/config/site.js`
- SEO y datos estructurados: `skyware-landing/src/config/seo.js`
- Textos principales de la landing: `skyware-landing/src/data/`
- Secciones visuales: `skyware-landing/src/components/sections/`
- Estilos globales: `skyware-landing/src/styles/globals.css`

## Deploy

El proyecto puede desplegarse en Vercel, Netlify o cualquier hosting compatible con aplicaciones Vite.

Para generar los archivos finales:

```bash
cd skyware-landing
npm run build
```

El resultado queda en `skyware-landing/dist/`.
