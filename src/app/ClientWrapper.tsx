"use client";

import { useGsapSmoothScroll } from "@/utils/smooth-scroll";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useGsapSmoothScroll(); // safe here
  return <>{children}</>;
}
