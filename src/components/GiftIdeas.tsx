import { Gift, Heart, Blocks, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GiftIdeas = () => {
  const giftIdeas = [
    { icon: Store, text: "Сертификат Детский Мир / Каспи" },
    { icon: Blocks, text: "Конструктор Lego Duplo" },
    { icon: Gift, text: "Развивающие игрушки" },
    { icon: Heart, text: "Развивающие книги / Фото-книга тактильная с аудио" },
    { icon: Gift, text: "Сортер-куб (кубик с резинками, в него складываются фигурки)" },
    { icon: Gift, text: "Alilo планшет Обучай-Зайка" },
    { icon: Gift, text: "Безопасное тесто для лепки" },
    { icon: Gift, text: "Пальчиковые краски для малышей" },
  ];

  const notGiftIdeas = [
    "Одежду",
    "Мягкие и резиновые игрушки",
    "Куклы/кукольная коляска",
    "Толокар/ходунки/машинка/качалка",
    "Мольберт",
    "Игрушечная посуда",
    "Сухой бассейн",
    "Палатка",
    "Ортоковрик",
    "Сортеры с морковками/червяками/рыбками",
    "Пианино",
    "Погремушки",
    "Аптечка/больница/касса",
    "Фигурки животных/динозавров"
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Gift Ideas */}
        <Card className="border-2 border-primary/20 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="font-handwriting text-4xl text-center" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Идеи подарков
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {giftIdeas.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-accent/20 border border-primary/10 transition-all hover:scale-105 hover:bg-accent/30"
                style={{ transition: 'var(--transition-smooth)' }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-lg font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* What Not to Gift */}
        <Card className="border-2 border-destructive/20 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="font-handwriting text-4xl text-center text-destructive">
              Что не стоит дарить
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {notGiftIdeas.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <span className="text-2xl">❌</span>
                </div>
                <p className="text-lg font-medium text-foreground">{item}</p>
              </div>
            ))}
            <p className="text-sm text-muted-foreground text-center pt-4 italic">
              У Оливии уже много таких подарков 💕
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GiftIdeas;
