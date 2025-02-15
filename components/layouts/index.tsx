import React from "react";
import Topbar from "./topbar";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};
export default function LayoutsPage({ children }: Props) {
  return (
    <div>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
