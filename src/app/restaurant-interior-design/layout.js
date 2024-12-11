import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Restaurant, Cafe & Bar Interior Design Dubai - We Do",
  description: "Transform your Restaurant & Bar Interior Design Dubai by We Do Interiors. We create best dining experiences. Call for FREE Consultation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};