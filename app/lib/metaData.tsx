import { META } from "@/constants/metadata";
import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  asPath?: string;
  ogImage?: string;
}

export const getMetadata = (metadataProps?: MetadataProps): Metadata => {
  const { title, description, asPath, ogImage } = metadataProps || {};

  const TITLE = title ? `${title}` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? `${META.url}${asPath}` : META.url;
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: TITLE,
        },
      ],
    },
    verification: {
      google: META.googleVerification,
      other: {
        "naver-site-verification": META.naverVerification,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [OG_IMAGE],
      creator: "@hailey_dev",
      site: "@hailey_dev",
    },
  };

  return metadata;
};
