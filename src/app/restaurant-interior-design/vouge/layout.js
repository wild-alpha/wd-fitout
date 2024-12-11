import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vouge Cafe interior Design Dubai-We Do Interiors",
  description: " Discover a stunning Dubai cafe interior design at Vouge Cafe .Our interior design team crafted a unique space, Let us transform your Dubai cafe.Contact us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};