
"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Insulated Water Bottle",
        price: 24.99,
        rating: 4.8,
        reviews: 128,
        image:
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=85",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Comfort Sneakers",
        price: 59.99,
        rating: 4.9,
        reviews: 312,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85",
        badge: "Popular",
    },
    {
        id: 3,
        name: "Smart Fitness Watch",
        price: 89.99,
        rating: 4.7,
        reviews: 276,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=85",
        badge: "",
    },
    {
        id: 4,
        name: "Ceramic Plant Pot",
        price: 19.99,
        rating: 4.8,
        reviews: 93,
        image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=85",
        badge: "New",
    },
    {
        id: 5,
        name: "Minimalist Backpack",
        price: 74.99,
        rating: 4.9,
        reviews: 156,
        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85",
        badge: "Trending",
    },
    {
        id: 6,
        name: "Wireless Earbuds",
        price: 49.99,
        rating: 4.6,
        reviews: 423,
        image:
            "https://images.unsplash.com/photo-1572569511251-d8e2e7b8c8d2?w=600&q=85",
        badge: "Sale",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="w-full bg-white py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-10 flex items-end justify-between sm:mb-14">
                    <div>
                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                            Handpicked for you
                        </p>

                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Featured Products
                        </h2>
                    </div>

                    <Link
                        href="/shop"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                    >
                        View All
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5">

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group flex h-full flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative overflow-hidden rounded-xl bg-gray-50">

                                <Link href={`/product/${product.id}`}>
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                                        />
                                    </div>
                                </Link>

                                {/* Badge - Top Left */}
                                {product.badge && (
                                    <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-gray-700 shadow-sm sm:text-[10px]">
                                        {product.badge}
                                    </span>
                                )}

                                {/* Wishlist - Top Right */}
                                <button
                                    type="button"
                                    aria-label="Add to wishlist"
                                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 shadow-sm transition-colors hover:bg-gray-900 hover:text-white sm:h-9 sm:w-9"
                                >
                                    <Heart className="h-4 w-4" />
                                </button>

                            </div>

                            {/* Product Details */}
                            <div className="flex flex-1 flex-col pt-3.5 sm:pt-4">

                                {/* Product Name Left / Price Right */}
                                <div className="flex items-start justify-between gap-2">

                                    <Link
                                        href={`/product/${product.id}`}
                                        className="min-w-0 flex-1"
                                    >
                                        <h3 className="line-clamp-2 text-[13px] font-medium leading-5 text-gray-800 transition-colors group-hover:text-blue-600 sm:text-sm">
                                            {product.name}
                                        </h3>

                                        <span className="shrink-0 whitespace-nowrap text-[13px] font-semibold text-gray-900 sm:text-sm">
                                            ${product.price.toFixed(2)}

                                        </span>
                                    </Link>

                                    {/* Add to Cart - Bottom Right */}
                                    <button
                                        type="button"
                                        aria-label="Add to cart"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 shadow-sm transition-colors hover:bg-gray-900 hover:text-white sm:h-9 sm:w-9"
                                    >
                                        <ShoppingBag className="h-4 w-4" />
                                    </button>

                                </div>

                                {/* Rating */}
                                <div className="mt-2 flex items-center gap-1.5">

                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-3.5 sm:w-3.5"
                                            />
                                        ))}
                                    </div>

                                    <span className="text-[10px] text-gray-400 sm:text-xs">
                                        ({product.reviews})
                                    </span>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
