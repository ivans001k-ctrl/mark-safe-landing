import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Success = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass-card-strong p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Спасибо! Ваша заявка успешно отправлена.
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Наш специалист свяжется с вами в течение 15 минут для уточнения деталей.
              </p>

              <div className="border border-primary/20 rounded-xl p-6 bg-primary/5">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg
                    className="w-8 h-8 text-[#0077FF]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.055c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.906c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.859-.859-1.81-.859-1.81s-.07-.176-.198-.272c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.161c-.112.135-.009.413-.009.413s1.795 4.258 3.832 6.403c1.866 1.967 3.984 1.838 3.984 1.838h.96z" />
                  </svg>
                  <span className="font-semibold text-foreground">ВКонтакте</span>
                </div>

                <p className="text-muted-foreground mb-6">
                  Пока вы ожидаете звонка, рекомендуем ознакомиться с полезными статьями и кейсами по маркировке в нашем сообществе ВКонтакте.
                </p>

                <Button
                  variant="hero"
                  size="lg"
                  asChild
                  className="w-full whitespace-normal h-auto py-3 text-sm md:text-base"
                >
                  <a
                    href="https://vk.com/mark_safe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Перейти в сообщество Mark Safe
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Success;
