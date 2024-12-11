import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Tech Company Interior Design Dubai - We Do Interiors",
  description: "Create a workspace for your company. We Do Interiors specializes in designing cutting-edge office interiors like Star Tech Company. Contact us Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};