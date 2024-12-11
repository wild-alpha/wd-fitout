import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al Wasl Dubai - Interior Designer Dubai - WE Do Interiors							",
  description: "Elevate your lifestyle with a touch of elegance & modernity at Al Wasl building. Browse our work on Al Wasl Dubai apartment & Book your Consultation Today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};