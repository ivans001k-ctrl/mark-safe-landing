import { motion } from "framer-motion";
import { FileText, Shield, Package, Truck, CheckCircle, BarChart3, Zap, Clock, Star, Award, Target, Users, Boxes, ClipboardCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const leftIcons = [{
    Icon: FileText,
    delay: 0.2,
    duration: 4,
    x: "5%",
    y: "15%"
  }, {
    Icon: Shield,
    delay: 0.4,
    duration: 3.5,
    x: "8%",
    y: "35%"
  }, {
    Icon: Package,
    delay: 0.6,
    duration: 4.2,
    x: "3%",
    y: "55%"
  }, {
    Icon: Truck,
    delay: 0.8,
    duration: 3.8,
    x: "10%",
    y: "75%"
  }, {
    Icon: CheckCircle,
    delay: 1,
    duration: 4.5,
    x: "15%",
    y: "25%"
  }, {
    Icon: BarChart3,
    delay: 1.2,
    duration: 3.6,
    x: "18%",
    y: "50%"
  }, {
    Icon: Zap,
    delay: 1.4,
    duration: 4.1,
    x: "12%",
    y: "65%"
  }];
  const rightIcons = [{
    Icon: Clock,
    delay: 0.3,
    duration: 4.3,
    x: "82%",
    y: "12%"
  }, {
    Icon: Star,
    delay: 0.5,
    duration: 3.7,
    x: "88%",
    y: "30%"
  }, {
    Icon: Award,
    delay: 0.7,
    duration: 4,
    x: "85%",
    y: "48%"
  }, {
    Icon: Target,
    delay: 0.9,
    duration: 3.9,
    x: "90%",
    y: "65%"
  }, {
    Icon: Users,
    delay: 1.1,
    duration: 4.4,
    x: "78%",
    y: "22%"
  }, {
    Icon: Boxes,
    delay: 1.3,
    duration: 3.5,
    x: "92%",
    y: "42%"
  }, {
    Icon: ClipboardCheck,
    delay: 1.5,
    duration: 4.2,
    x: "80%",
    y: "72%"
  }, {
    Icon: Settings,
    delay: 1.7,
    duration: 3.8,
    x: "86%",
    y: "80%"
  }];
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Content */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="text-center max-w-4xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
            <span className="text-gradient text-[#511ea4] text-center px-0 mx-0 text-6xl">Маркировка</span>
            <br />
            <span className="text-[#511ea4] text-6xl text-center">Честный Знак</span>
            <br />
            <span className="text-4xl text-[#0f1729]">под ключ</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold text-[#0f1729]">
            Ваш удаленный отдел сопровождения
          </motion.p>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-[#0f1729]">
            Возьмем на себя все процессы: от выпуска кодов до отчетов в Честный Знак. 
            Полный цикл работ для селлеров и производителей.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="flex flex-wrap justify-center gap-4">
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
      </div>

      {/* Floating Icons - Left Side */}
      {leftIcons.map(({
      Icon,
      delay,
      duration,
      x,
      y
    }, index) => <motion.div key={`left-${index}`} className="absolute hidden lg:flex" style={{
      left: x,
      top: y
    }} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1,
      y: [0, -15, 0],
      rotate: [-5, 5, -5]
    }} transition={{
      delay,
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}>
          <div className={`${index % 2 === 0 ? 'claymorphism-icon' : 'claymorphism-icon-purple'} w-14 h-14 flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </motion.div>)}

      {/* Floating Icons - Right Side */}
      {rightIcons.map(({
      Icon,
      delay,
      duration,
      x,
      y
    }, index) => <motion.div key={`right-${index}`} className="absolute hidden lg:flex" style={{
      left: x,
      top: y
    }} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1,
      y: [0, -12, 0],
      rotate: [5, -5, 5]
    }} transition={{
      delay,
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}>
          <div className={`${index % 2 === 0 ? 'claymorphism-icon-purple' : 'claymorphism-icon'} w-14 h-14 flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </motion.div>)}
    </section>;
};
export default HeroSection;