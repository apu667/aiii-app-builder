"use client";

import { Bot } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function Footer() {
  const { t } = useLang();

  const links = {
    product: [
      { name: t("Features", "ফিচারস"), href: "#features" },
      { name: t("How it Works", "কিভাবে কাজ করে"), href: "#how" },
      { name: t("Pricing", "মূল্য"), href: "#pricing" },
      { name: t("FAQ", "জিজ্ঞাসা"), href: "#faq" },
    ],
    company: [
      { name: t("About", "আমাদের সম্পর্কে"), href: "#" },
      { name: t("Blog", "ব্লগ"), href: "#" },
      { name: t("Careers", "ক্যারিয়ার"), href: "#" },
      { name: t("Contact", "যোগাযোগ"), href: "#" },
    ],
    resources: [
      { name: t("Documentation", "ডকুমেন্টেশন"), href: "#" },
      { name: t("Help Center", "সাহায্য কেন্দ্র"), href: "#" },
      { name: t("Privacy Policy", "গোপনীয়তা নীতি"), href: "#" },
      { name: t("Terms of Service", "সেবার শর্তাবলী"), href: "#" },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">SellMet AI</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t(
                "AI-driven e-commerce automation platform that builds shops, automates chats, and creates orders instantly.",
                "এআই-চালিত ই-কমার্স অটোমেশন প্ল্যাটফর্ম যা দোকান তৈরি করে, চ্যাট স্বয়ংক্রিয় করে এবং সাথে সাথে অর্ডার তৈরি করে।"
              )}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">{t("Product", "পণ্য")}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground">{t("Company", "কোম্পানি")}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground">{t("Resources", "রিসোর্স")}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 NimbleBot. {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}</p>
        </div>
      </div>
    </footer>
  );
}
