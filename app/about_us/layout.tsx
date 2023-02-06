import { Suspense } from "react";
import AboutLoading from "./loading";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<AboutLoading />}>{children}</Suspense>
    </section>
  );
}
