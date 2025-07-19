
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Body and Behavior Analysis - Character Transformation Method",
  description = "Helping you reconnect with the essence beneath your patterns through evidence-based coaching methods and compassionate support.",
  keywords = "character analysis, behavior analysis, personal transformation, coaching, self-improvement",
  image = "/og-image.jpg",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website"
}) => {
  const fullTitle = title.includes('Body and Behavior Analysis') ? title : `${title} | Body and Behavior Analysis`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Body and Behavior Analysis" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Body and Behavior Analysis" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Body and Behavior Analysis",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "sameAs": [
            "https://instagram.com/bodyandbehavioranalysis",
            "https://linkedin.com/company/bodyandbehavioranalysis"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
