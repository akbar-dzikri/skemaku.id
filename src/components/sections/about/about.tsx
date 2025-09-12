import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Mapping icons to features for easy rendering
const iconMap = new Map();
iconMap.set(0, HardHat);
iconMap.set(1, PiggyBank);
iconMap.set(2, Timer);
iconMap.set(3, HousePlus);

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-12 py-12">
      {/* Features Section */}
      <div className="bg-accent">
        <div className="container mx-auto px-4 py-12">
          {/* Responsive grid for feature cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>

      {/* About Us Section */}
      <div className="bg-background container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Tentang Kami
        </h2>

        {/* Responsive container for About Us content */}
        <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Left side: Image layout for desktop, carousel for mobile */}
          <ImageOrCarousel />

          {/* Right side: Tabs for company info */}
          <div className="w-full max-w-md flex-shrink-0">
            <Card className="w-full">
              <CardContent className="p-4">
                <Tabs defaultValue="tentang">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="tentang">Tentang Kami</TabsTrigger>
                    <TabsTrigger value="visi">Visi Misi</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="tentang"
                    className="text-muted-foreground mt-4"
                  >
                    <p>
                      Tim kami berkomitmen untuk memberikan layanan konstruksi
                      dengan profesionalisme, kualitas, dan ketepatan waktu.
                      Kami percaya dalam membangun hubungan yang kuat dengan
                      klien kami.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="visi"
                    className="text-muted-foreground mt-4"
                  >
                    <p>
                      Visi kami adalah menjadi penyedia jasa konstruksi terdepan
                      di wilayah ini. Misi kami adalah menghadirkan rumah impian
                      berkualitas tinggi bagi semua orang dengan inovasi dan
                      integritas.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, index }: FeatureCardProps) {
  const Icon = iconMap.get(index);
  return (
    <Card className="bg-background rounded-2xl border-none text-center shadow-sm sm:text-left">
      <CardContent className="flex flex-col items-center gap-4 p-6 sm:items-start">
        <div className="bg-primary/10 rounded-full p-3">
          <Icon className="text-primary h-8 w-8" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function ImageOrCarousel() {
  const images = [
    {
      src: "https://placehold.co/600x600/e2e8f0/475569?text=Logo",
      alt: "Logo Sekemaku",
    },
    {
      src: "https://placehold.co/600x600/e2e8f0/475569?text=Rumah+1",
      alt: "Rumah 1",
    },
    {
      src: "https://placehold.co/600x600/e2e8f0/475569?text=Rumah+2",
      alt: "Rumah 2",
    },
  ];

  return (
    <div className="w-full max-w-md flex-shrink-0 md:max-w-sm lg:max-w-md">
      {/* Desktop images */}
      <div className="relative hidden h-64 w-full md:block">
        <div className="absolute top-0 left-8 z-10 h-48 w-48 transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="absolute top-12 right-8 z-10 h-48 w-48 transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="h-full w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="absolute top-6 left-1/2 z-20 h-52 w-52 -translate-x-1/2 transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="border-background h-full w-full rounded-lg border-4 object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Mobile carousel */}
      <Carousel
        className="relative mx-auto w-full max-w-xs md:hidden"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <div className="h-64 w-full rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
