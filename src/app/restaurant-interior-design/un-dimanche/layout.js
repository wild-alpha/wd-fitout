import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Un Dimanche à Paris Restaurant-We Do Interiors",
  description: "Un Dimanche à Paris Restaurant .Our expert interior design team showcased us as one of the best interior design companies in Dubai.Contact We Do Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};