import { Suspense } from "react";
import ChefLoading from "./loading";

export default function ChefLayout({
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
