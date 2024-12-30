import { Metadata } from "next";
import { ClientWrapper } from "@/app/clientComponents";

export const metadata: Metadata = {
  title: "Hailey's blog",
  description: "This is Hailey's blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
