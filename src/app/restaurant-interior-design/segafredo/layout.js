import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Segafredo Zanetti Espresso Restaurant Dubai -We Do Interiors",
  description: "Experience the new Segafredo Zanetti Espresso Restaurant Dubai, brought to life by the interior design experts at We DO Interiors. Contact Us Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};