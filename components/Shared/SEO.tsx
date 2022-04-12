import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SEO: React.FC<{ title: string; description?: string }> = ({
  title,
  description = "",
}) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string | undefined>(undefined);
  const metaDescription =
    description !== "" ? description : process.env.siteDescription;
  const keywords = process.env.siteKeywords;
  const siteURL = process.env.siteUrl;
  const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;
  const metaTitle = title
    ? title + " | " + process.env.siteTitle
    : process.env.siteTitle;

  useEffect(() => {
    const pathname = router.pathname;
    setCurrentPath(pathname);
  }, [router]);

  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:url" content={siteURL + currentPath} key="ogurl" />
      <meta property="og:title" content={metaTitle} key="ogtitle" />
      <meta property="og:image" content={imagePreview} key="ogimage" />
      <meta property="og:site_name" content={siteURL} key="ogsitename" />
      <meta property="og:description" content={metaDescription} key="ogdesc" />
      <meta property="og:type" content="website" />
      <title>{metaTitle}</title>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={siteURL + currentPath} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="reputation.link" />
      <meta property="twitter:url" content={siteURL} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imagePreview} />

      {/* Android Chrome tab theme colour */}
      <meta name="theme-color" content="#00000" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" />
      {/* <link rel="preconnect" href="https://use.typekit.net" /> */}
      <link rel="stylesheet" href="https://use.typekit.net/klm0viv.css" />
    </Head>
  );
};

export default SEO;
