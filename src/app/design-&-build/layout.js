import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Design and Build Services Dubai | Expert Interior Fit-out",
  description: "Expert design and build services in Dubai. Transform your space with our innovative solutions. From concept to completion, we deliver stunning interior designs and flawless execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
