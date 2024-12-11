import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Commercial Interior Design Dubai | We Do Interiors",
  description: "Elevate your business with commercial interior design. Create functional and stylish spaces .Contact The Best Interior Design Company Dubai, WE Do Interiors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
