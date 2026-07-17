import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { navigationItems } from "../../data/navigation";
import Button from "../ui/Button";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Navegación principal"
      >
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg text-sm font-semibold text-slate-700 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          
          <Button
            href={siteConfig.whatsapp.url}
            ariaLabel={siteConfig.whatsapp.ariaLabel}
          >
            {siteConfig.whatsapp.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 transition hover:border-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-100 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"
        >
          <div className="grid gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={siteConfig.whatsapp.url}
              ariaLabel={siteConfig.whatsapp.ariaLabel}
              className="mt-2 w-full"
            >
              {siteConfig.whatsapp.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
