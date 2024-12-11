import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MEBY Tourism Office Interior Design Dubai - We Do Interiors",
  description: "Create a captivating travelling agency office with We Do Interiors. Our interior design experts will transform your office like MEBY Tourism office .Contact Us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};