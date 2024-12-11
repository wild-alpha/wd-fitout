import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitout Experts Dubai |Premier Fitout Solution |WeDo Interior Fitout",
  description: "We Do Interior Fitout offers Premium solutions for residences, offices, shops, and restaurants fitout. Browse Our Portfolio & Contact Us Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
