import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative h-dvh w-screen md:h-[500px]">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-start px-4 lg:px-8">
        <div className="flex flex-col gap-2 rounded-2xl p-8 bg-blend-darken">
          <div className="text-center md:text-start">
            <h1 className="text-background text-5xl font-bold md:text-6xl">
              Skemaku.id
            </h1>
            <p className="text-muted max-w-md text-lg md:text-xl">
              Kontraktor terpercaya untuk rumah tinggal, renovasi, dan
              perencanaan bangunan.
            </p>
          </div>
          <Button size="sm" variant="default" asChild>
            <a href="#contact">Kontak Sekarang</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full animate-bounce items-center justify-center">
        <a href="#about">
          <ChevronDown className="text-accent h-12 w-12" />
        </a>
      </div>
    </div>
  );
}
