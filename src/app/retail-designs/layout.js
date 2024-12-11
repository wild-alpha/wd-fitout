import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Luxury Retail Interior Design Dubai- We Do Interiors",
  description: "Are you looking to create a classy retail shop in competitive Dubai market? Look no further than We Do Interiors, premier retail interior design company in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};