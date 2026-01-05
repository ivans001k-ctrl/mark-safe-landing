import ParallaxBackground from "@/components/ParallaxBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParallaxBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
