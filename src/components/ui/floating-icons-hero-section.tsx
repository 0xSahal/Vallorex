"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX.current - centerX, 2) +
            Math.pow(mouseY.current - centerY, 2)
        );

        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - centerY,
            mouseX.current - centerX
          );
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn("absolute", iconData.className)}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      >
        <iconData.icon className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="absolute inset-0 pointer-events-none">
        {icons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8 py-3 text-base h-auto"
          >
            <Link href={ctaHref}>{ctaText} →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
});

FloatingIconsHero.displayName = "FloatingIconsHero";

export { FloatingIconsHero };
