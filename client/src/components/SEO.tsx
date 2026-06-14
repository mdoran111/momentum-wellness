import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { siteUrl } from "@/lib/links";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  robots,
}: SEOProps) {
  const [location] = useLocation();
  const fullTitle = `${title}`;
  const ogT = ogTitle || title;
  const ogD = ogDescription || description;
  const canonicalPath = location.split("?")[0] || "/";
  const canonicalUrl = new URL(canonicalPath, siteUrl).toString();
  const socialImageUrl = new URL("/opengraph.jpg", siteUrl).toString();

  useEffect(() => {
    const cleanupId = window.requestAnimationFrame(() => {
      const keepLastTag = (selector: string) => {
        const tags = Array.from(document.head.querySelectorAll(selector));
        tags.slice(0, -1).forEach((tag) => tag.remove());
      };

      [
        'meta[name="description"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:type"]',
        'meta[property="og:url"]',
        'meta[property="og:image"]',
        'meta[name="twitter:card"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
        'meta[name="twitter:image"]',
      ].forEach(keepLastTag);

      if (keywords) {
        keepLastTag('meta[name="keywords"]');
      } else {
        document
          .head
          .querySelectorAll('meta[name="keywords"]')
          .forEach((tag) => tag.remove());
      }

      if (robots) {
        keepLastTag('meta[name="robots"]');
      } else {
        document
          .head
          .querySelectorAll('meta[name="robots"]')
          .forEach((tag) => tag.remove());
      }
    });

    return () => window.cancelAnimationFrame(cleanupId);
  }, [description, keywords, ogD, ogT, robots, title, location]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
      <meta name="twitter:image" content={socialImageUrl} />
    </Helmet>
  );
}
