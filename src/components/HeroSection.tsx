import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Limited Spots Banner */}
          <div className="w-full">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
              <span>✨ Limited Spots Available</span>
            </AnimatedShinyText>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
            Learn The Exact Systems That Made Myself And Dozens Of Others Our First{" "}
            <span className="text-primary">6-Figures With Organic</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            60%-80% Profit Margins, No Hidden Costs, or Fees!
          </p>

          {/* Hero Video */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                thumbnailSrc="../../public/hero thubnail.png"
                thumbnailAlt="Coaching Program Introduction"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                thumbnailSrc="../../public/hero thubnail.png"
                thumbnailAlt="Coaching Program Introduction"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-20">
            <RainbowButton className="px-11 py-10 text-2xl">
              Apply For 1-1 Coaching
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 