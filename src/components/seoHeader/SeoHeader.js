import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seo, routeMeta } from "../../portfolio.js";

const SITE = "https://yahyarahimi.dev";

/**
 * Keeps document metadata in sync with the current route after React takes
 * over. The same values are written into the static HTML at build time by
 * scripts/prerender.mjs, both reading routeMeta, so a visitor and a scraper
 * see the same title and description.
 *
 * This sets the tags directly rather than going through react-helmet, which
 * re-rendered with the correct values but did not apply them to the DOM on
 * client-side navigation, leaving a stale title in the tab.
 *
 * Person structured data is deliberately not emitted here. It is baked into
 * the prerendered HTML so clients that never run JavaScript still get it;
 * adding it here too would put two competing Person entities on the page.
 */
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function SeoHeader() {
  const path = useLocation().pathname;
  const normalized =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  const meta = routeMeta[normalized] || {
    title: seo.title,
    description: seo.description,
  };
  const url = `${SITE}${normalized === "/" ? "/" : normalized}`;

  useEffect(() => {
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertCanonical(url);
  }, [meta.title, meta.description, url]);

  return null;
}

export default SeoHeader;
