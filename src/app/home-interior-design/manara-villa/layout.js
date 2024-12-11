import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al Manara Dubai | No.1 Splendour villas By We Do Interiors",
  description: "Al Manara Dubai one the Splendour villas designed by By We Do Interior Design Company Dubai. Browse project & Contact Us us Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};