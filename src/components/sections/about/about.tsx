import { Card, CardContent } from "@/components/ui/card";
import { HardHat, HousePlus, PiggyBank, Timer } from "lucide-react";

const features = [
  {
    title: "Professional & Berpengalaman",
    description:
      "Tim kami terdiri dari profesional yang berpengalaman dalam membangun rumah dan renovasi.",
  },
  {
    title: "Harga Kompetitif & Transparan",
    description:
      "Kami menawarkan harga kompetitif dan transparan tanpa mengorbankan kualitas.",
  },
  {
    title: "Tepat Waktu",
    description:
      "Kami memahami bahwa waktu adalah uang, kami akan bekerja dengan tepat waktu untuk memenuhi jadwal proyek Anda.",
  },
  {
    title: "Kualitas Terjamin",
    description:
      "Kami memastikan kualitas terjamin dengan menggunakan bahan baku berkualitas tinggi dan memperhatikan detail desain.",
  },
];

const iconMap = new Map();
iconMap.set(0, HardHat);
iconMap.set(1, PiggyBank);
iconMap.set(2, HousePlus);
iconMap.set(3, Timer);

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export function AboutSection() {
  return (
    <section id="about" className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              index={index}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto"></div>
    </section>
  );
}

function FeatureCard({ title, description, index }: FeatureCardProps) {
  const Icon = iconMap.get(index);
  return (
    <Card className="bg-background rounded-2xl shadow-sm">
      <CardContent className="flex flex-col items-start gap-3 p-6">
        <Icon className="text-primary h-10 w-10" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
