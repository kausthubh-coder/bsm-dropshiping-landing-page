import confetti from "canvas-confetti";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import NumberTicker from "@/components/ui/number-ticker";
import WordPullUp from "@/components/ui/word-pull-up";
import ShimmerButton from "@/components/ui/shimmer-button";

const features = [
  {
    title: "Business Foundation",
    items: ["Automated Client Systems", "Lead Generation Mastery", "High-Ticket Offer Creation"],
    metric: { value: 97, label: "success rate" },
    gradient: { from: "#FF6B6B", to: "#4ECDC4" }
  },
  {
    title: "Growth & Scaling",
    items: ["Traffic Generation Methods", "Content Strategy Blueprint", "Conversion Optimization"],
    metric: { value: 10, label: "k+ monthly potential" },
    gradient: { from: "#A8E6CF", to: "#3D84A8" }
  },
  {
    title: "Advanced Strategies",
    items: ["Sales Psychology Mastery", "Automation Systems", "Team Building Framework"],
    metric: { value: 3, label: "x growth multiplier" },
    gradient: { from: "#FFD93D", to: "#FF6B6B" }
  }
];

const bottomFeatures = [
  "24/7 Support System",
  "Weekly Live Coaching",
  "Private Community Access",
  "Done-For-You Templates",
  "Case Study Library"
];

export function WhatYouLearnSection() {
  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient that won't get cut off */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedShinyText className="text-4xl md:text-6xl font-bold mb-6">
            What You'll Learn
          </AnimatedShinyText>
          <WordPullUp
            className="text-xl md:text-2xl text-muted-foreground"
            words="Transform Your Business With These Skills"
          />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <NeonGradientCard 
              key={index} 
              className="relative overflow-hidden group"
              neonContainerClassName="rounded-2xl"
            >
              <div className="p-8 h-full flex flex-col bg-card/95 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">
                  {feature.title}
                </h3>
                
                <div className="flex-grow space-y-4 mb-6">
                  {feature.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-3 p-4 rounded-lg bg-background/40"
                    >
                      <span className="text-primary">•</span>
                      <p className="text-foreground/90">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 pt-4 border-t border-primary/10">
                  <NumberTicker 
                    value={feature.metric.value} 
                    className="text-4xl font-bold text-primary"
                  />
                  <span className="text-lg text-muted-foreground">
                    {feature.metric.label}
                  </span>
                </div>
              </div>
            </NeonGradientCard>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-primary/10">
            {bottomFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-foreground/80"
              >
                <span className="text-primary text-xl">✓</span>
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center space-y-6">
          
          <div className="flex flex-col items-center">
            <ShimmerButton 
              className="text-lg px-12 py-6 font-semibold rounded-xl bg-primary/10"
              onClick={handleConfetti}
            >
              Join 200+ Successful Students
            </ShimmerButton>
            <p className="mt-4 text-sm text-muted-foreground">
              Limited spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatYouLearnSection; 