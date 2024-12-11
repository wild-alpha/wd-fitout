import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fujiya Japanese Restaurant Downtown Dubai",
  description: "Discover the heart of Japan at Fujiya Restaurant Dubai. Our interior design captures the essence Japanese aesthetics. Contact  We Do Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};