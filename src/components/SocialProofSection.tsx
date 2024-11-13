"use client";
import { useRef } from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Confetti from "@/components/ui/confetti";
import NumberTicker from "@/components/ui/number-ticker";
import BlurFade from "@/components/ui/blur-fade";
import type { ConfettiRef } from "@/components/ui/confetti";
import ShinyButton from "@/components/ui/shiny-button";
import ShineBorder from "@/components/ui/shine-border";

const earningsData = [
  {
    image: "../../public/test/test1.avif",
    description: "First 5-Figure Month: $15,000 in 30 Days",
  },
  {
    image: "../../public/test/test2.avif",
    description: "Consistent Growth: $25,000 Monthly",
  },
  {
    image: "../../public/test/test3.avif",
    description: "Record Breaking: $42,000 in One Month",
  },
  {
    image: "../../public/test/test4.avif",
    description: "Sustained Success: $38,000 Monthly",
  },
  {
    image: "../../public/test/test5.avif",
    description: "New Peak: $45,000 Achievement",
  },
  {
    image: "../../public/test/test6.avif",
    description: "Major Milestone: $52,000 Month",
  },
  {
    image: "../../public/test/test7.avif",
    description: "Consistent Results: $48,000",
  },
  {
    image: "../../public/test/test8.avif",
    description: "Best Month: $56,000 Earned",
  },
  {
    image: "../../public/test/test9.avif",
    description: "New Record: $60,000 Month",
  }
];

export function SocialProofSection() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimatedShinyText className="text-4xl md:text-6xl font-bold mb-6">
            All My People Print Money...
          </AnimatedShinyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-center max-w-4xl mx-auto">
          <div className="p-8 backdrop-blur-sm bg-card/50 rounded-2xl border border-border/50">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
              <NumberTicker value={200} />
            </div>
            <p className="text-2xl font-semibold text-muted-foreground">
              Students Achieving 5-Figure Months
            </p>
          </div>
          <div className="p-8 backdrop-blur-sm bg-card/50 rounded-2xl border border-border/50">
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-primary">$</span>
              <NumberTicker 
                value={10} 
                className="text-5xl md:text-6xl font-bold text-primary"
              />
              <span className="text-5xl md:text-6xl font-bold text-primary">M+</span>
            </div>
            <p className="text-2xl font-semibold text-muted-foreground">
              Total Student Earnings
            </p>
          </div>
        </div>

        

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mb-16">
          {earningsData.map((item, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.05} inView>
              <div className="mb-4 break-inside-avoid">
                <ShineBorder
                  className="overflow-hidden"
                  borderRadius={12}
                  borderWidth={2}
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover"
                  />
                </ShineBorder>
              </div>
            </BlurFade>
          ))}
        </div>

        <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />

        <div className="flex flex-col items-center justify-center gap-6">
          <ShinyButton 
            className="text-lg px-8 py-4 font-semibold"
            onClick={() => confettiRef.current?.fire({})}
          >
            See How You Can Start Earning
          </ShinyButton>
          
          <div className="group">
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection; 