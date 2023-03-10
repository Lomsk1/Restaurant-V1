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
