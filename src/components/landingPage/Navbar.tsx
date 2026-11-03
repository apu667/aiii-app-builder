"use client";

import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t("Features", "ফিচারস"), href: "#features" },
    { name: t("How it Works", "কিভাবে কাজ করে"), href: "#how" },
    { name: t("Pricing", "মূল্য"), href: "#pricing" },
    { name: t("FAQ", "জিজ্ঞাসা"), href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border bg-background/80 px-4 py-2 shadow-sm backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-semibold">SellMet AI</span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={toggleLang} className="hidden sm:flex">
              {lang === "en" ? "বাংলা" : "English"}
            </Button>
            <Button size="sm" className="bg-blue-600 text-white">
              <a href="#pricing">{t("Get Started Free", "ফ্রি শুরু করুন")}</a>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-2 rounded-2xl border bg-background px-4 py-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="ghost" size="sm" onClick={toggleLang} className="justify-start">
                {lang === "en" ? "বাংলা" : "English"}
              </Button>
              <Button size="sm" className="bg-blue-600 text-white">
                <a href="#pricing">{t("Get Started Free", "ফ্রি শুরু করুন")}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
