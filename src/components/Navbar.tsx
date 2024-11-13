
import { RainbowButton } from "@/components/ui/rainbow-button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">BSM</div>
          <RainbowButton>Apply Now</RainbowButton>;
        </div>
      </div>
    </nav>
  );
} 