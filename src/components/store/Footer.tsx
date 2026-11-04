"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: "Facebook", href: "https://facebook.com", label: "Facebook" },
    { icon: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { icon: "X", href: "https://x.com", label: "X" },
    { icon: "YouTube", href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className=" border-t border-gray-200 bg-gray-50 mt-12">
      <div className="border-b border-gray-200 overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-14">
          <div className="max-w-md">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Join Our Community
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get 10% off your first order
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Subscribe to get exclusive offers, new arrivals, and updates.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center overflow-hidden rounded-full border border-gray-300 bg-white p-1 shadow-sm"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full bg-transparent px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-16">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-gray-900">
                NimbleCart
              </span>
            </Link>
            <p className="mt-1 max-w-xs text-sm leading-6 text-gray-500">
              Good Things. A Brighter You.<br />
              Thoughtfully curated products for everyday living.
            </p>
            {/* <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-tight text-gray-900 uppercase">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=new" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=bestsellers" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=deals" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Deals & Offers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-tight text-gray-900 uppercase">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/track-order" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-tight text-gray-900 uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Download Our App</h3>
            <p className="mt-1 text-sm text-gray-500">Shop anytime, anywhere.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-400">
              Google Play
            </a>
            <a href="#" className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-gray-400">
              App Store
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 NimbleCart. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link href="/privacy" className="transition-colors hover:text-gray-900">
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-gray-300 mx-1" />
            <Link href="/terms" className="transition-colors hover:text-gray-900">
              Terms of Service
            </Link>
            <span className="w-px h-3 bg-gray-300 mx-1" />
            <Link href="/cookies" className="transition-colors hover:text-gray-900">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
