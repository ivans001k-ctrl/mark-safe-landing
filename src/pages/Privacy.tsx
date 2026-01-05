import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <Layout>
      <section className="relative z-10 pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 md:p-10 rounded-3xl">
              <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-8">
                Политика конфиденциальности
              </h1>
              
              <div className="prose prose-lg max-w-none font-inter text-muted-foreground break-words">
                <p className="mb-6">
                  Здесь будет размещен текст политики конфиденциальности. Пожалуйста, замените этот текст на актуальную юридическую информацию.
                </p>
                
                <h2 className="font-montserrat font-semibold text-xl text-foreground mt-8 mb-4">
                  1. Общие положения
                </h2>
                <p className="mb-6">
                  Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса Mark Safe.
                </p>
                
                <h2 className="font-montserrat font-semibold text-xl text-foreground mt-8 mb-4">
                  2. Сбор информации
                </h2>
                <p className="mb-6">
                  Мы собираем информацию, которую вы предоставляете при заполнении форм на сайте, включая имя, номер телефона и адрес электронной почты.
                </p>
                
                <h2 className="font-montserrat font-semibold text-xl text-foreground mt-8 mb-4">
                  3. Использование информации
                </h2>
                <p className="mb-6">
                  Собранная информация используется исключительно для связи с вами по вопросам предоставления услуг маркировки товаров.
                </p>
                
                <h2 className="font-montserrat font-semibold text-xl text-foreground mt-8 mb-4">
                  4. Защита данных
                </h2>
                <p className="mb-6">
                  Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа.
                </p>
                
                <h2 className="font-montserrat font-semibold text-xl text-foreground mt-8 mb-4">
                  5. Контактная информация
                </h2>
                <p>
                  По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу: marksafe.team@yandex.ru
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
