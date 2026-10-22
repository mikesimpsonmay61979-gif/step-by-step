import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { RegisterSW } from "@/components/register-sw";
import { Shell } from "@/components/shell";
import { ProgressProvider } from "@/lib/progress";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: {
    default: "First Steps",
    template: "%s · First Steps",
  },
  description:
    "Learn computers, asking an AI helper, and simple web pages. One small step at a time. Large text. Progress saved on this device.",
  applicationName: "First Steps",
  appleWebApp: {
    capable: true,
    title: "First Steps",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2a47",
  width: "device-width",
  initialScale: 1,
};

const textScript = `(function(){try{var s=JSON.parse(localStorage.getItem("first-steps-v1")||"{}");var t=s.textSize;if(t==="large"||t==="huge"||t==="max"){document.documentElement.setAttribute("data-text",t);}else{document.documentElement.setAttribute("data-text","huge");}}catch(e){document.documentElement.setAttribute("data-text","huge");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${atkinson.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        <script dangerouslySetInnerHTML={{ __html: textScript }} />
        <ProgressProvider>
          <Shell>{children}</Shell>
          <RegisterSW />
        </ProgressProvider>
      </body>
    </html>
  );
}
