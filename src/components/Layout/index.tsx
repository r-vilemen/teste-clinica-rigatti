import React from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const hideHeaderOn = ["/login"];
  const hideFooterOn = ["/login"];

  const showHeader = !hideHeaderOn.includes(router.pathname);
  const showFooter = !hideFooterOn.includes(router.pathname);

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
