import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "6W Residence Penthouse Dubai - Interior by WE Do interiors",
  description: "Looking for a trusted partner for penthouse interior design? Well! We DO interiors is the Best option for you in Dubai. UAE. Contact us Today.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};