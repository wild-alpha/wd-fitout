import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xaima Interior Design Dubai 2024 - We Do Interiors",
  description: "Experience stunning setting. Xaima Restaurant interior design, crafted by the professional Interior Design team of We Do Interior Design Company Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};