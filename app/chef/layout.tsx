import { Suspense } from "react";
import ChefLoading from "./loading";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<ChefLoading />}>{children}</Suspense>
    </section>
  );
}
