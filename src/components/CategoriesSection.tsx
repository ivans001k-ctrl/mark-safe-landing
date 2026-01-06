import { motion } from "framer-motion";

const categories = [
  "Бакалея",
  "Кресла коляски",
  "Шины",
  "Парфюм",
  "Корма для животных",
  "Велосипеды",
  "Молочная продукция",
  "Одежда",
  "Медицинские изделия",
  "Бытовая химия",
  "Фотоаппараты",
  "БАД",
  "Обувь",
  "Консервированные продукты",
  "Белье",
  "Упакованная вода",
  "Технические средства реабилитации",
  "Антисептики",
  "Моторные масла",
  "Б/а напитки",
  "Растительные масла",
  "Игрушки",
  "Отопительные приборы",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Работаем со всеми
              <br />
              <span className="text-gradient">категориями</span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 lg:max-w-2xl"
          >
            {categories.map((category) => (
              <motion.span
                key={category}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="pill-tag"
              >
                {category}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
