import { Suspense } from "react";
import ContactLoading from "./loading";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Suspense fallback={<ContactLoading />}>{children}</Suspense>
    </section>
  );
}
