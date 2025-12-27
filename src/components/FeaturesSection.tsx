import { motion } from "framer-motion";
import { Award, Zap, Clock, HeadphonesIcon, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Экспертность",
    description: "Более 5 лет опыта в маркировке товаров",
  },
  {
    icon: Zap,
    title: "Скорость",
    description: "Выпуск кодов за 3-24 часа",
  },
  {
    icon: Clock,
    title: "Оперативность",
    description: "Быстрая реакция на ваши запросы",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка",
    description: "Техподдержка 7 дней в неделю",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    description: "100% соответствие требованиям ЧЗ",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему <span className="text-gradient">выбирают нас</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <div className="claymorphism-icon-purple w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
