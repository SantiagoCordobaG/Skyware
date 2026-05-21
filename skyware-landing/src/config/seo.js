import { siteConfig } from "./site";

export const seoConfig = {
  title: "Skyware | Páginas web profesionales para negocios en Cali",
  description:
    "Creamos páginas web profesionales, landing pages, automatizaciones y soluciones con IA para emprendedores, restaurantes y pequeños negocios en Cali, Colombia.",
  openGraph: {
    title: "Skyware | Páginas web profesionales para negocios en Cali",
    description:
      "Páginas web, landing pages, automatizaciones e IA para pequeños negocios en Cali.",
    type: "website",
    url: siteConfig.url,
    locale: "es_CO",
    siteName: siteConfig.name,
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      "Páginas web, landing pages, automatizaciones y soluciones con IA para pequeños negocios.",
    areaServed: siteConfig.city,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressCountry: siteConfig.country,
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href),
  },
};
