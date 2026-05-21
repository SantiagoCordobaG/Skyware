const whatsappNumber = "573022462123";
const whatsappMessage =
  "Hola Skyware, quiero una página web profesional para mi negocio.";
const email = "hola@skyware.com";

export const siteConfig = {
  name: "Skyware",
  tagline: "Construye. Conecta. Eleva.",
  description:
    "Skyware crea páginas web, soluciones digitales, automatizaciones e inteligencia artificial para pequeños negocios y emprendedores.",
  url: "https://skyware.com",
  city: "Cali, Colombia",
  country: "Colombia",
  email,
  emailUrl: `mailto:${email}`,
  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    label: "Hablar por WhatsApp",
    ariaLabel: "Hablar por WhatsApp con Skyware",
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`,
  },
  colors: {
    blueDark: "#0A1D3D",
    blueMedium: "#0D47A1",
    bluePrimary: "#1976FF",
    skyBlue: "#60B6FF",
    skyBlueLight: "#D6E8FF",
    surfaceLight: "#F5F9FF",
    textDark: "#0F172A",
    textMuted: "#64748B",
    white: "#FFFFFF",
  },
  socialLinks: [],
  footerServiceLinks: [
    { label: "Páginas web", href: "#servicios" },
    { label: "Landing pages", href: "#servicios" },
    { label: "Automatización", href: "#servicios" },
    { label: "Soluciones con IA", href: "#servicios" },
  ],
};
