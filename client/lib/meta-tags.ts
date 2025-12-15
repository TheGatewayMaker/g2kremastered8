interface MetaTagConfig {
  title: string;
  description: string;
  url: string;
  keywords?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export function updateMetaTags(config: MetaTagConfig) {
  // Set viewport if not present
  let viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    viewport = document.createElement("meta");
    viewport.setAttribute("name", "viewport");
    viewport.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover");
    document.head.appendChild(viewport);
  }

  // Set robots meta tag
  let robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement("meta");
    robots.setAttribute("name", "robots");
    robots.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    document.head.appendChild(robots);
  }

  // Set charset if not present
  let charset = document.querySelector('meta[charset]');
  if (!charset) {
    charset = document.createElement("meta");
    charset.setAttribute("charset", "utf-8");
    document.head.insertBefore(charset, document.head.firstChild);
  }

  // Add language meta tag
  let lang = document.querySelector('meta[http-equiv="content-language"]');
  if (!lang) {
    lang = document.createElement("meta");
    lang.setAttribute("http-equiv", "content-language");
    lang.setAttribute("content", "en-us");
    document.head.appendChild(lang);
  }
  // Update title
  document.title = config.title;

  // Update or create meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute("content", config.description);

  // Update or create keywords meta
  if (config.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", config.keywords);
  }

  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute("content", config.title);

  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute("content", config.description);

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute("content", config.url);

  if (config.ogImage) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", config.ogImage);
  }

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", config.url);

  // Update Twitter tags
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement("meta");
    twitterTitle.setAttribute("name", "twitter:title");
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute("content", config.title);

  let twitterDescription = document.querySelector(
    'meta[name="twitter:description"]',
  );
  if (!twitterDescription) {
    twitterDescription = document.createElement("meta");
    twitterDescription.setAttribute("name", "twitter:description");
    document.head.appendChild(twitterDescription);
  }
  twitterDescription.setAttribute("content", config.description);

  // Add or update JSON-LD schema markup
  if (config.schema) {
    let schema = document.querySelector('script[type="application/ld+json"]');
    if (!schema) {
      schema = document.createElement("script");
      schema.setAttribute("type", "application/ld+json");
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(config.schema);
  }

  // Add Open Graph image type
  let ogType = document.querySelector('meta[property="og:type"]');
  if (!ogType) {
    ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    document.head.appendChild(ogType);
  }
  ogType.setAttribute("content", "website");

  // Add site name
  let ogSiteName = document.querySelector('meta[property="og:site_name"]');
  if (!ogSiteName) {
    ogSiteName = document.createElement("meta");
    ogSiteName.setAttribute("property", "og:site_name");
    document.head.appendChild(ogSiteName);
  }
  ogSiteName.setAttribute("content", "Gateway Links 2K25");

  // Add locale
  let ogLocale = document.querySelector('meta[property="og:locale"]');
  if (!ogLocale) {
    ogLocale = document.createElement("meta");
    ogLocale.setAttribute("property", "og:locale");
    document.head.appendChild(ogLocale);
  }
  ogLocale.setAttribute("content", "en_US");
}

export function resetMetaTags() {
  updateMetaTags({
    title: "Gateway Links 2K25 - g2k Ultimate Link Directory",
    description:
      "Gateway Links 2K25 - Your ultimate gateway to discover streaming platforms, applications, books, AI tools, games, torrents, and more. All curated links in one place.",
    url: "https://gatewaylinks2k25.com/",
    keywords:
      "g2k, gateway links, gateway links 2k25, link aggregator, streaming, apps, books, AI tools, games, torrents",
  });
}
