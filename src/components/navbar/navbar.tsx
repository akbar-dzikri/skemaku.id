import { Button } from "../ui/button";
import { routes } from "./data";

export function Navbar() {
  return (
    <div className="w-full bg-accent shadow-md">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex justify-center items-center gap-4">
          <img
            src="https://placehold.co/120x70.png?text=SK"
            alt="logo"
            className="w-32 h-10"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          {routes.map((route) => (
            <Button key={route.href} variant="link" asChild>
              <a href={route.href}>{route.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
