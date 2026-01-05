import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Категории", anchor: "categories" },
  { label: "Услуги", anchor: "services" },
  { label: "Калькулятор", anchor: "calculator" },
  { label: "Преимущества", anchor: "features" },
  { label: "Отзывы", anchor: "testimonials" },
  { label: "Контакты", anchor: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    if (isHomePage) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Mark Safe" className="h-10 w-auto" />
            <span className="font-montserrat font-bold text-xl text-foreground">
              Mark Safe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.anchor)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={`/#${item.anchor}`}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+79581119404" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Получить консультацию
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              isHomePage ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.anchor)}
                  className="text-foreground font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={`/#${item.anchor}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button variant="outline" asChild className="mt-4">
              <a href="tel:+79581119404" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Получить консультацию
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
