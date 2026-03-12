import "./globals.css";
import { Space_Grotesk, DM_Sans, Fira_Code } from "next/font/google";
import Navbar from "../components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Sumanth Dodda | Security Engineer",
  description:
    "Security Engineer specializing in AI-driven threat modeling, SSDLC, and software supply chain security.",
  openGraph: {
    title: "Sumanth Dodda | Security Engineer",
    description:
      "Security Engineer specializing in AI-driven threat modeling, SSDLC, and software supply chain security.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sumanth Dodda | Security Engineer",
    description:
      "Security Engineer specializing in AI-driven threat modeling, SSDLC, and software supply chain security.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${firaCode.variable}`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
