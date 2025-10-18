import { Baby, Scale, TrendingUp, Smile, MessageCircle, Heart, Frown, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutOlivia = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-handwriting text-center mb-12 text-primary animate-fade-in">
          Обо мне
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Я родилась */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Baby className="w-6 h-6" />
                Я родилась
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                <strong>6 ноября 2024</strong> в <strong>18:05</strong>
              </p>
              <p className="text-muted-foreground mt-2">
                4006 гр • 55 см • ♏ Скорпион
              </p>
            </CardContent>
          </Card>

          {/* Я выросла */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <TrendingUp className="w-6 h-6" />
                Я выросла
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                <strong>9 кг</strong> • <strong>75 см</strong>
              </p>
              <p className="text-muted-foreground mt-2">
                У меня <strong>8 зубиков</strong> 🦷
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Я умею */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Smile className="w-6 h-6" />
                Я умею
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Складывать игрушки в коробочку</li>
                <li>• Кидать мяч</li>
                <li>• Махать "пока"</li>
                <li>• Делать жест "сюда"</li>
                <li>• Показывать пальчиком на предметы</li>
              </ul>
            </CardContent>
          </Card>

          {/* Я говорю */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageCircle className="w-6 h-6" />
                Я говорю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg space-x-3">
                <span className="text-2xl text-primary">мама</span>
                <span className="text-2xl text-primary">папа</span>
                <span className="text-2xl text-primary">баба</span>
                <span className="text-2xl text-primary">ням</span>
                <span className="text-2xl text-primary">неть</span>
                <span className="text-2xl text-primary">да</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Я люблю */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Heart className="w-6 h-6" />
                Я люблю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Мультик "Цып-цып"</li>
                <li>• Играть в мяч</li>
                <li>• Играть с сестренкой</li>
                <li>• Исследовать дом</li>
              </ul>
            </CardContent>
          </Card>

          {/* Я не люблю */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Frown className="w-6 h-6" />
                Я не люблю
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Одеваться</li>
                <li>• Когда куда-то не пускают</li>
                <li>• Мерить температуру</li>
                <li>• Когда что-то не дают</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Мои достижения */}
        <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Trophy className="w-6 h-6" />
              Мои достижения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl text-primary font-semibold">3 мес</p>
                <p className="text-sm text-muted-foreground">Поворот</p>
              </div>
              <div>
                <p className="text-3xl text-primary font-semibold">8 мес</p>
                <p className="text-sm text-muted-foreground">Поползла</p>
              </div>
              <div>
                <p className="text-3xl text-primary font-semibold">10 мес</p>
                <p className="text-sm text-muted-foreground">Села</p>
              </div>
              <div>
                <p className="text-3xl text-primary font-semibold">10 мес</p>
                <p className="text-sm text-muted-foreground">Встала</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutOlivia;