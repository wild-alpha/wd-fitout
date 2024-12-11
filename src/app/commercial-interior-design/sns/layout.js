import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saudi Network Services Office Interior Design -We Do Interiors",
  description: "We Do Interiors created a workspace for Saudi Network Services. Our expert interior designers Dubai team designed an office interior design. Contact Us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};