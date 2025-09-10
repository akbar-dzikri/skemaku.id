import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative h-screen md:h-[500px] w-screen">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container shadow-sm">
          <h1 className="text-6xl font-bold text-background">Skemaku.id</h1>
          <p className="text-lg text-muted max-w-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ab,
            quae, maxime porro sapiente deserunt ipsum molestiae beatae ad
            dolorum earum necessitatibus soluta modi eius alias dolorem sequi id
            veritatis eum numquam incidunt praesentium itaque? Pariatur maxime
            odit et commodi.
          </p>
        </div>
      </div>
      <div className="absolute flex justify-center items-center bottom-0 w-screen animate-bounce">
        <a href="#about">
          <ChevronDown className="text-accent w-[1000px]" />
        </a>
      </div>
    </div>
  );
}
