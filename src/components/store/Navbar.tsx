"use client";

import React from "react";
import Link from "next/link";
import { Search, UserRound, Heart, ShoppingCart, Leaf, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 group-hover:scale-105 transition-transform duration-200">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-gray-900 sm:text-lg">
                NimbleCart
              </h1>
              <p className="hidden text-[10px] tracking-wide text-gray-400 sm:block">
                Good Things. A Brighter You.
              </p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden max-w-[520px] flex-1 md:block">
            <div className="relative group">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-600" />

              <input
                type="search"
                placeholder="Search products, brands and more..."
                className="h-10 w-full rounded-full bg-gray-50 pl-10 pr-3 text-sm text-gray-700 transition-all placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />

              <button className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all hover:bg-blue-600 hover:text-white">
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/account"
              className="hidden sm:flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-blue-600"
            >
              <UserRound className="h-4 w-4" />
              <span>Account</span>
            </Link>

            <Link
              href="/wishlist"
              className="relative hidden sm:flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-blue-600"
            >
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </Link>

            <Link
              href="/cart"
              className="relative flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-blue-600"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-0.5 text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 transition-all hover:bg-gray-100 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              placeholder="Search products..."
              className="h-10 w-full rounded-full bg-gray-50 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block -mt-2">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-3">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "New Arrivals", href: "/new-arrivals" },
              { name: "Best Sellers", href: "/best-sellers" },
              { name: "Deals", href: "/deals" },
              { name: "Categories", href: "/categories" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-all hover:text-blue-600 relative after:absolute after:-bottom-2.5 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:rounded-full after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
