import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Interior Design Dubai | Elegance & Functionality | We Do ",
  description: "Discover the epitome of luxury living with our top-tier residential fitout services in Dubai. Elevate, Customize, Redefine - Your Dream Home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};