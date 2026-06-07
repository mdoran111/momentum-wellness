import { Helmet } from "react-helmet-async";

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
  const fullTitle = `${title}`;
  const ogT = ogTitle || title;
  const ogD = ogDescription || description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/opengraph.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
      <meta name="twitter:image" content="/opengraph.jpg" />
    </Helmet>
  );
}
