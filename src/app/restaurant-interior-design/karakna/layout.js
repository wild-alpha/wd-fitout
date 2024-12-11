import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KARAKNA CAFE interior Design Dubai- We Do Interiors",
  description: "Experience Karakna Dubai Cafe! interior design by We Do interior designer dubai, a top interior design company. Contact us for best interior design dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};