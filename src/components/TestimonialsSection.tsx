import { useState } from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Marquee from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import AvatarCircles from "@/components/ui/avatar-circles";
import ShinyButton from "@/components/ui/shiny-button";
import Confetti from "@/components/ui/confetti";
import Meteors from "@/components/ui/meteors";

const testimonials = [
  {
    name: "Duff",
    title: "How Duff Made Over $80,000 In 30 Days",
    videoSrc: "https://www.youtube.com/embed/rzgaOBDrMv4",
    thumbnailSrc: "../../public/80.jpg",
    avatarUrl: "https://avatar.vercel.sh/duff",
  },
  {
    name: "Chris",
    title: "How Chris Made $42,000 In 30 Days",
    videoSrc: "https://www.youtube.com/embed/2vY9OFYj2-8",
    thumbnailSrc: "../../public/42.jpg",
    avatarUrl: "https://avatar.vercel.sh/chris",
  },
  {
    name: "Reese",
    title: "How Reese Made $30,000 In His First Month",
    videoSrc: "https://www.youtube.com/embed/2KhwnZziJig",
    thumbnailSrc: "../../public/30.jpg",
    avatarUrl: "https://avatar.vercel.sh/reese",
  },
];

const marqueeItems = [
  "$80,000 in 30 Days",
  "Unmatched Success with Organic Growth",
  "Life-Changing Results",
  "Real Student Success Stories",
];

export function TestimonialsSection() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <section className="relative py-20">
      {/* Section Header */}
      <div className="container mx-auto text-center mb-16">
        <AnimatedShinyText className="text-4xl md:text-5xl font-bold mb-8">
          Our Students' Success Stories
        </AnimatedShinyText>

        <Marquee className="mb-12 [--duration:15s]">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="mx-8 text-xl font-semibold text-primary/80"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Success Stories Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <MagicCard
                className="h-[400px] cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setShowConfetti(true)}
                onMouseLeave={() => setShowConfetti(false)}
              >
                <Meteors number={20} />
                <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                  {/* Avatar */}
                  <div className="mb-6">
                    <AvatarCircles
                      avatarUrls={[testimonial.avatarUrl]}
                      numPeople={1}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">{testimonial.title}</h3>

                  {/* Video Dialog Trigger */}
                  <HeroVideoDialog
                    videoSrc={testimonial.videoSrc}
                    thumbnailSrc={testimonial.thumbnailSrc}
                    thumbnailAlt={`${testimonial.name}'s Success Story`}
                    animationStyle="from-bottom"
                    className="mt-6"
                  />

                  {showConfetti && (
                    <Confetti className="absolute inset-0" manualstart={true} />
                  )}
                </div>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <ShinyButton className="text-lg px-8 py-4">
          Join the Success - Apply Now for 1-on-1 Coaching
        </ShinyButton>
      </div>
    </section>
  );
}

export default TestimonialsSection; 