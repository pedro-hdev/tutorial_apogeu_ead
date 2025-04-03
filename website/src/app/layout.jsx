import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400","500","600","700"], 
  variable: "--font-rubik", 
});


export default function RootLayout({ children }) {
  return (
    <html lang="Pt-br">
      <body
      >
        {children}
      </body>
    </html>
  );
}
