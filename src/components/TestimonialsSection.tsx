import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Мария В.",
    role: "Селлер WB",
    text: "Срочно нужно было промаркировать партию платьев, поставка горела. Mark Safe сделали коды за 3 часа, помогли с УПД. Товар приняли на склад без вопросов. Работаем теперь постоянно.",
    rating: 5,
  },
  {
    name: "Алексей",
    role: "Импорт",
    text: "Раньше мучались сами с Честным Знаком... Передали всё на аутсорсинг ребятам. За месяц сэкономили кучу времени и нервов. Рекомендую.",
    rating: 5,
  },
  {
    name: "ООО «Текстиль-Про»",
    role: "Производство",
    text: "Заказывали полную настройку под ключ... Техподдержка всегда на связи, все вопросы решают быстро и профессионально.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Отзывы</span> наших клиентов
          </h2>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide overscroll-x-contain px-4 -mx-4 pb-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-strong p-6 min-w-[300px] w-[85vw] flex-shrink-0 snap-center"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card-strong p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
