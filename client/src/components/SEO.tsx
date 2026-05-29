import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
}: SEOProps) {
  const fullTitle = `${title}`;
  const ogT = ogTitle || title;
  const ogD = ogDescription || description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
    </Helmet>
  );
}
