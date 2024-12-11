import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code 8 Cafe Interior Design-Dubai Cafe-We Do Interiors",
  description: "Code 8 Cafe, a top Dubai Cafe, designed by We Do Interiors. Experience our award-winning design for cafes, restaurants and bars. Contact us Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};