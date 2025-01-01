import { Metadata } from "next";
import { ClientWrapper } from "@/clientComponents";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "Hailey's blog",
  description: "This is Hailey's blog",
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