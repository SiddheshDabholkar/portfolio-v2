/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RootLayout from "./RootLayout";

type LayoutProps = React.FC<{
  children: React.ReactNode;
}>;

const Layout: LayoutProps = ({ children }) => {
  return (
    <RootLayout>
      <Navbar />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </RootLayout>
  );
};

export default Layout;
