"use client";

import React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const banners = [
  {
    image:
      "https://images.unsplash.com/photo-1664084379424-a099041a2b79?w=1600&q=85",
    title: "Summer Collection",
    subtitle: "Up to 50% off on all summer essentials",
    href: "/shop?category=summer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=85",
    title: "Electronics Deals",
    subtitle: "Latest gadgets at unbeatable prices",
    href: "/shop?category=electronics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=85",
    title: "Smart Wearables",
    subtitle: "Fitness watches and smart bands",
    href: "/shop?category=wearables",
  },
];

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="w-full relative overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="pl-0">
              <Link
                href={banner.href}
                className="block h-[350px] sm:h-[400px] lg:h-[600px] relative overflow-hidden"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
               
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Banner;
