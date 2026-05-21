import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../config/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[var(--color-skyware-surface-light)] py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-slate-600">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Servicios</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            {siteConfig.footerServiceLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">Contacto</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
              {siteConfig.city}
            </div>
            <a
              href={siteConfig.emailUrl}
              className="flex items-center gap-2 rounded-lg hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsapp.url}
              className="flex items-center gap-2 rounded-lg hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
              {siteConfig.whatsapp.label}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-5 pt-6 text-sm text-slate-500 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
