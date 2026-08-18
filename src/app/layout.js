import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "IBS Group Canada",
  description:
    "Innovative Business Solutions for Indigenous organizations and entrepreneurs.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
      </body>
    </html>
  );
}