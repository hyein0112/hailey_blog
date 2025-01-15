import { Metadata } from "next";
import { ClientWrapper } from "@/clientComponents";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "Hailey's blog",
  description: "백혜인의 기술 블로그",
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  // 구글/네이버 검색엔진 등록 메타태그
  verification: {
    google: "x38iF18YiFpJbQLV8ipwt9lBiuG39jzerHxEY_VW14I",
    other: {
      "naver-site-verification": "101c39e2ab4abd812f59b65c947e13c478dbfc2f",
    },
  },

  openGraph: {
    title: "Hailey's blog",
    description: "백혜인의 기술 블로그",

    images: [
      {
        url: "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/logo.svg",
        width: 1200,
        height: 630,
        alt: "hailey's blog",
      },
    ],
  },
};

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning={true} className={notoSansKr.variable}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
