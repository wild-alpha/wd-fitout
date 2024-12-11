import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Joinery Company in Dubai | Custom Woodworks",
  description: "Looking for expert joinery services in Dubai? We offer high-quality custom woodwork and cabinetry for residential and commercial projects. Contact us for a free quote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
