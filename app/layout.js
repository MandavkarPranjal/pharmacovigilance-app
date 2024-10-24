import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-upright",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata = {
  title: "Indian Phramacovigilance",
  description: "PCU Pharmacovigilance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
