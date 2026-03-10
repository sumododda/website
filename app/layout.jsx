import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Sumanth Dodda | Portfolio",
  description:
    "Enthusiastic cybersecurity analyst with expertise in ethical hacking, cloud computing, and DevOps.",
  openGraph: {
    title: "Sumanth Dodda | Portfolio",
    description:
      "Enthusiastic cybersecurity analyst with expertise in ethical hacking, cloud computing, and DevOps.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sumanth Dodda | Portfolio",
    description:
      "Enthusiastic cybersecurity analyst with expertise in ethical hacking, cloud computing, and DevOps.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
