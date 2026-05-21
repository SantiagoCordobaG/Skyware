import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { seoConfig } from "./config/seo";
import { siteConfig } from "./config/site";
import "./styles/globals.css";
import SkywareLandingPage from "./App.jsx";

function toCssVariableName(key) {
  return `--color-skyware-${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
}

function applyBrandColors(colors) {
  Object.entries(colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(toCssVariableName(key), value);
  });
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function applySeo(config) {
  document.title = config.title;

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: config.description,
  });

  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: config.openGraph.title,
  });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: config.openGraph.description,
  });
  upsertMeta('meta[property="og:type"]', {
    property: "og:type",
    content: config.openGraph.type,
  });
  upsertMeta('meta[property="og:url"]', {
    property: "og:url",
    content: config.openGraph.url,
  });
  upsertMeta('meta[property="og:locale"]', {
    property: "og:locale",
    content: config.openGraph.locale,
  });
  upsertMeta('meta[property="og:site_name"]', {
    property: "og:site_name",
    content: config.openGraph.siteName,
  });

  let schemaScript = document.getElementById("structured-data");

  if (!schemaScript) {
    schemaScript = document.createElement("script");
    schemaScript.id = "structured-data";
    schemaScript.type = "application/ld+json";
    document.head.appendChild(schemaScript);
  }

  schemaScript.textContent = JSON.stringify(config.schema);
}

applyBrandColors(siteConfig.colors);
applySeo(seoConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SkywareLandingPage />
  </StrictMode>,
);
