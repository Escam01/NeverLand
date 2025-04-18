import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeverLand | SneackerShop",
  description: "SneackerShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main className="h-full">
          {children}
        </main>
        <footer className="p-4 mt-10 text-center ">
        <p>Все права защищены</p>
      </footer>
      </body>
    </html>
  );
}