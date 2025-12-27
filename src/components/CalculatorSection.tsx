import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const calculatePrice = (quantity: number): string | number => {
  if (quantity <= 0) return 0;
  if (quantity <= 100) return 1000; // Fixed price for package
  if (quantity <= 500) return quantity * 10;
  if (quantity <= 2000) return quantity * 6;
  if (quantity <= 7000) return quantity * 5;
  if (quantity <= 20000) return quantity * 3;
  if (quantity <= 50000) return quantity * 2;
  if (quantity <= 100000) return quantity * 1.5;
  return "Индивидуально";
};

const formatPrice = (price: string | number): string => {
  if (typeof price === "string") return price;
  return new Intl.NumberFormat("ru-RU").format(Math.round(price)) + " ₽";
};

const CalculatorSection = () => {
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState<string | number | null>(null);

  const handleCalculate = () => {
    const qty = parseInt(quantity, 10);
    if (!isNaN(qty) && qty > 0) {
      setResult(calculatePrice(qty));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <section id="calculator" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card-strong p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="claymorphism-icon w-16 h-16 flex items-center justify-center">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Калькулятор стоимости</h2>
                <p className="text-muted-foreground">Рассчитайте стоимость выпуска кодов</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Количество кодов
                </label>
                <Input
                  type="number"
                  placeholder="Введите количество кодов"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-14 text-lg bg-white/50 border-white/60 focus:border-primary"
                />
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleCalculate}
              >
                Рассчитать
              </Button>

              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-purple-deep/5 rounded-2xl border border-purple-deep/20"
                >
                  <p className="text-muted-foreground mb-1">Стоимость партии:</p>
                  <p className="text-3xl md:text-4xl font-bold text-gradient">
                    {formatPrice(result)}
                  </p>
                </motion.div>
              )}

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full" 
                asChild
              >
                <a 
                  href="https://t.me/marksafe_team" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Узнать детали в Telegram
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground text-center">
                * Тарифы: до 100 шт — фикс 1 000 ₽, 101-500 — 10 ₽/шт, 501-2000 — 6 ₽/шт, 
                2001-7000 — 5 ₽/шт, 7001-20000 — 3 ₽/шт, 20001-50000 — 2 ₽/шт, 50001-100000 — 1.5 ₽/шт
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
