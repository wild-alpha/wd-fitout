import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Allegro Cafe & Bar Interior Design- We Do Interiors",
  description: "Allegro Cafe & Bar! Our interior design team created a captivating atmosphere by working as one of the best interior design companies Dubai. We Do Interior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};