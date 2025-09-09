import { Button } from "../ui/button";

export function Navbar() {
  return (
    <div className="container bg-background">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex justify-center items-center gap-4">
          <img
            src="https://placehold.co/120x70.png?text=SK"
            alt="logo"
            className="w-32 h-10"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button>
            <a href="/">Beranda</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
