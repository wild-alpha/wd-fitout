import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carnistore Central Kitchen Interior Design Dubai- We Do Interiors",
  description: "Explore our project of Central Kitchen Carnistore Interior Design Dubai design by We Do interiors. We are here for creating best bars in Dubai.Contact us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};