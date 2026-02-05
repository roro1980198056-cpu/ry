import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Light Therapy Facial-X7 - Seven Light Treatments in One | AndBalanced",
  description: "BREAKING NEWS!: How You Can Say Goodbye to Your Skin Problems: The FDA Cleared, 100% Natural, 10-Minute Revolutionary Skincare Routine Everyone's Talking About!",
  icons: {
    icon: "https://ext.same-assets.com/778971269/842236202.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
