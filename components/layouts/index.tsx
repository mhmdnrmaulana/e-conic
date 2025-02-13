import Footer from "./footer";
import Navbar from "./navbar";
import Topbar from "./topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
