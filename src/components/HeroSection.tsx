import { motion } from "framer-motion";
import { FileText, Shield, Package, Truck, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">Маркировка</span>
              <br />
              <span className="text-foreground">«Честный Знак»</span>
              <br />
              <span className="text-foreground">под ключ.</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-semibold">
                Ваш удаленный отдел сопровождения
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
            >
              Возьмем на себя все процессы: от выпуска кодов до отчетов в Честный Знак. 
              Полный цикл работ для селлеров и производителей.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" onClick={scrollToCalculator}>
                Рассчитать стоимость
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+79581119404">
                  Получить консультацию
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - 3D Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {/* Main Glass Panel */}
            <motion.div
              className="glass-card-strong w-80 h-96 flex items-center justify-center"
              animate={{ rotateY: [-5, 5, -5], rotateX: [3, -3, 3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="claymorphism-icon w-24 h-24 flex items-center justify-center">
                <QrCode className="w-12 h-12 text-primary-foreground" />
              </div>
            </motion.div>

            {/* Floating Icons - positioned absolutely relative to container */}
            <motion.div
              className="absolute left-8 top-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{ delay: 0.6, duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="claymorphism-icon w-14 h-14 flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
            </motion.div>

            <motion.div
              className="absolute right-8 top-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{ delay: 0.8, duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="claymorphism-icon-purple w-14 h-14 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </motion.div>

            <motion.div
              className="absolute left-4 bottom-24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ delay: 1, duration: 4.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="claymorphism-icon-purple w-14 h-14 flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
            </motion.div>

            <motion.div
              className="absolute right-4 bottom-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
              transition={{ delay: 1.2, duration: 3.8, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="claymorphism-icon w-14 h-14 flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
            </motion.div>

            {/* Secondary Glass Panels */}
            <motion.div
              className="absolute -left-10 top-20 glass-card w-40 h-40 opacity-60"
              animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-10 bottom-20 glass-card w-32 h-32 opacity-50"
              animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
