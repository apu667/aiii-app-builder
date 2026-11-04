
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

const categories = [
    {
        name: "Women",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=85",
        href: "/shop?category=women",
    },
    {
        name: "Men",
        image:
            "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&q=85",
        href: "/shop?category=men",
    },
    {
        name: "Home & Living",
        image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=85",
        href: "/shop?category=home",
    },
    {
        name: "Beauty",
        image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=85",
        href: "/shop?category=beauty",
    },
    {
        name: "Electronics",
        image:
            "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=85",
        href: "/shop?category=electronics",
    },
    {
        name: "Sports",
        image:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=85",
        href: "/shop?category=sports",
    },
    {
        name: "Kids",
        image:
            "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&q=85",
        href: "/shop?category=kids",
    },
    {
        name: "Accessories",
        image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=85",
        href: "/shop?category=accessories",
    },
];

const CategorySection = () => {
    const autoplay = React.useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    );

    return (
        <section className="w-full bg-gray-50 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Category Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        slidesToScroll: 1,
                    }}
                    plugins={[autoplay.current]}
                    className="relative w-full"
                >
                    <CarouselContent className="-ml-4">

                        {categories.map((category) => (
                            <CarouselItem
                                key={category.name}
                                className="pl-4 basis-1/4 sm:basis-1/4 md:basis-1/5 lg:basis-1/ xl:basis-1/9"
                            >
                                <Link
                                    href={category.href}
                                    className="block"
                                >
                                    {/* Category Image */}
                                    <div className="relative aspect-square overflow-hidden rounded-full border border-gray-200 bg-white">

                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />

                                    </div>

                                    {/* Category Name */}
                                    <p className="mt-3 text-center text-sm font-medium text-gray-700">
                                        {category.name}
                                    </p>

                                </Link>
                            </CarouselItem>
                        ))}

                    </CarouselContent>


                    <CarouselPrevious className="absolute left-2  -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 -translate-y-1/2" />

                </Carousel>

            </div>
        </section>
    );
};

export default CategorySection;
