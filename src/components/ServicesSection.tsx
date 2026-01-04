import { motion } from "framer-motion";
import { Rocket, Settings, QrCode, Wrench } from "lucide-react";
const services = [{
  icon: Rocket,
  title: "Лёгкий старт",
  price: "2 490 ₽",
  features: ["Регистрация в Честном Знаке", "Регистрация в GS1 Rus", "Настройка КриптоПро", "Настройка ЭДО"]
}, {
  icon: Settings,
  title: "Сопровождение",
  price: "от 9 990 ₽",
  features: ["Настройка ЧЗ под ключ", "Работа с УПД и отгрузками", "Выпуск и ввод кодов", "Исправление ошибок"]
}, {
  icon: QrCode,
  title: "Выпуск кодов",
  price: "от 1.50 ₽ / код",
  features: ["Заказ Data Matrix кодов", "Создание карточек товаров", "Ввод в оборот"]
}, {
  icon: Wrench,
  title: "Аутсорсинг и SOS",
  price: "от 990 ₽",
  features: ["Разовые отгрузки УПД", "Вывод из оборота / Списание", "Продление лицензии КриптоПро", "Исправление ошибок"]
}];
const ServicesSection = () => {
  return <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-gradient">услуги</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный спектр услуг по маркировке товаров для вашего бизнеса
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto -mx-4 px-4 snap-x snap-mandatory pb-0 mt-0 ml-0 mr-0">
          <div className="flex gap-4" style={{
          width: "max-content"
        }}>
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="glass-card-strong p-6 w-72 snap-center flex flex-col">
                <div className="claymorphism-icon w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-2xl font-bold text-gradient mb-4">{service.price}</p>
                <ul className="space-y-2 flex-1">
                  {service.features.map(feature => <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      {feature}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -8,
          transition: {
            duration: 0.2
          }
        }} className="glass-card-strong p-6 flex flex-col h-full">
              <div className="claymorphism-icon w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-gradient mb-4">{service.price}</p>
              <ul className="space-y-2 flex-1">
                {service.features.map(feature => <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    {feature}
                  </li>)}
              </ul>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;