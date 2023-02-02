import Header from "@/components/header";
// import "../style/main.scss";
import { Abril_Fatface, Merriweather } from "@next/font/google";
import SideNavigation from "@/components/sidebar";
import Footer from "@/components/footer";
import { Suspense } from "react";
import MenuLoading from "./loading";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<MenuLoading />}>{children}</Suspense>
    </section>
  );
}
