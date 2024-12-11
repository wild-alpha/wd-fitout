import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Villa Construction Companies in Dubai | Custom Villas",
  description: "Looking for a reliable villa construction company in Dubai? We specialize in building exquisite custom villas. Our experienced team offers exceptional craftsmanship and attention to detail.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
