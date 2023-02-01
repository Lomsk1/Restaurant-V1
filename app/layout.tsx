import Header from "@/components/header";
import "../style/main.scss";
import { Abril_Fatface, Merriweather } from "@next/font/google";
import SideNavigation from "@/components/sidebar";
import Footer from "@/components/footer";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
  weight: "400",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: "400",
});

const merriweatherBold = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather-bold",
  display: "swap",
  weight: "900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${merriweather.variable} ${merriweatherBold.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SideNavigation />
        <div className="main_child">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
