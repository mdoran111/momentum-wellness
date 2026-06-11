import { Helmet } from "react-helmet-async";
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
