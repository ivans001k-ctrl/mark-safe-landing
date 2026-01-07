import { motion } from "framer-motion";
import { Phone, Mail, Send, MessageCircle, Youtube, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Категории", href: "#categories" },
  { label: "Услуги", href: "#services" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Преимущества", href: "#features" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
];

// Custom Dzen icon component
const DzenIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" />
  </svg>
);

const socialLinks = [
  { icon: Send, href: "https://t.me/marksafe_team", label: "Telegram" },
  { icon: MessageCircle, href: "https://vk.com/mark_safe", label: "VK" },
  { icon: Youtube, href: "https://youtube.com/@mark-safe", label: "YouTube" },
  { icon: DzenIcon, href: "https://dzen.ru/id/6949091e0c88a5537e346597", label: "Яндекс.Дзен" },
  { icon: MapPin, href: "https://yandex.com/maps/-/CLXceG35", label: "Яндекс.Карты" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Mark Safe" className="h-10 w-auto" />
              <span className="font-montserrat font-bold text-xl">Mark Safe</span>
            </div>
            <div className="space-y-3">
              <a
                href="tel:+79581119404"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                +7 (958) 111-94-04
              </a>
              <a
                href="mailto:marksafe.team@yandex.ru"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                marksafe.team@yandex.ru
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-6">Мы в соцсетях</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-6">Навигация</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Mark Safe. Все права защищены.</p>
          <Link 
            to="/privacy" 
            className="inline-block hover:text-foreground transition-colors underline underline-offset-2"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
