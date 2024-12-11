import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Majan Villa Interior Design Dubai - We Do interiors	",
  description: "Explore majjan Villa project by We Do Interiors. Luxury villa & modern house design ✓ joinery works ✓ new ceiling design & splendour villas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};