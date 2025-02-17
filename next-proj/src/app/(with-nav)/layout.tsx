import { NavBar } from "@/components/layout/nav-bar/nav-bar";
import Footer from "@/components/layout/footer";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer/>
    </>
  );
}