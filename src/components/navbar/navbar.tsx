import { Button } from "../ui/button";
import { routes } from "./data";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerOverlay,
} from "@/components/ui/drawer";

export function Navbar() {
  return (
    <div className="w-full bg-accent shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://placehold.co/120x70.png?text=Skemaku.id"
              alt="Skemaku.id Logo"
              className="w-16 "
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Button key={route.href} variant="link" asChild>
                <a
                  href={route.href}
                  className="text-foreground hover:text-primary"
                >
                  {route.label}
                </a>
              </Button>
            ))}
          </div>
          <Drawer direction="top">
            <DrawerTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerOverlay />
            <DrawerContent className="md:hidden mt-4 pb-2">
              <div className="flex flex-col gap-2">
                {routes.map((route) => (
                  <Button
                    key={route.href}
                    variant="link"
                    asChild
                    className="justify-start"
                  >
                    <a
                      href={route.href}
                      className="text-foreground hover:text-primary"
                    >
                      {route.label}
                    </a>
                  </Button>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
