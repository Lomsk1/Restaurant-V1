import { Suspense } from "react";
import ChefDetailLoading from "./loading";

export default function ChefDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<ChefDetailLoading />}>{children}</Suspense>
    </section>
  );
}
