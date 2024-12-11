import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atlantis The Royal | Build and Design | We Do Interiors",
  description: "Explore the elegance of Atlantis The Royal. Bring your vision to life with We Do interior design company. Contact us Today & transform your space!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};