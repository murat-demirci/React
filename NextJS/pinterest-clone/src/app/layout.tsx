import NavComp from "@/components/NavComp";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterComp from "@/components/FooterComp";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NavComp />
          {children}
          <FooterComp />
        </ReduxProvider>
      </body>
    </html>
  );
}
