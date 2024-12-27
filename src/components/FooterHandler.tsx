"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterHandler() {
  const pathname = usePathname();

  // Paths where footer should not appear
  const noFooterPaths = ["/userPage"];

  if (noFooterPaths.includes(pathname)) {
    return null; // Do not render Footer
  }

  return <Footer />;
}