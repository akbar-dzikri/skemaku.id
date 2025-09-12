import { Navbar } from "./components/navbar/navbar";
import { AboutSection } from "./components/sections/about/about";
import { HeroSection } from "./components/sections/hero/hero";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <main className="mt-10 md:px-16"></main>
    </>
  );
}
