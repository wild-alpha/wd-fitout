import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peaky Blinder Barber Shop-Interior Design -We Do Interiors",
  description: "Experience the peaky blinder barber shop with We Do Interiors. We specialize in creating stunning barber shop interiors. Best Interior Designer Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};