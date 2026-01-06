import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm md:text-base text-foreground/80">
                Мы используем файлы cookie для улучшения работы сайта и анализа трафика. 
                Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
                <Link 
                  to="/privacy" 
                  className="text-purple-deep underline underline-offset-2 hover:text-purple-deep/80 transition-colors"
                >
                  политикой конфиденциальности
                </Link>
                .
              </p>
              <Button 
                onClick={handleAccept}
                className="shrink-0 w-full md:w-auto"
              >
                Принимаю
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
