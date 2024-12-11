import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manal AJAJ Boutique Interior Design Dubai | We Do Interiors",
  description: "Create a fashion boutique with We Do Interiors. Our expert interior designers will bring the Manal AJAJ brand to life through exceptional interior design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};