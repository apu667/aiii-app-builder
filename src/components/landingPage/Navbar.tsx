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
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/20 bg-background/70 px-6 py-2.5 shadow-xl backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">SellMet AI</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={toggleLang} className="hidden sm:flex px-4 py-2 rounded-lg">
              {lang === "en" ? "বাংলা" : "English"}
            </Button>
            <Button size="sm" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/25">
              <a href="#pricing">{t("Get Started Free", "ফ্রি শুরু করুন")}</a>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2.5 rounded-lg">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 rounded-2xl border border-white/20 bg-background/90 px-6 py-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button variant="ghost" size="sm" onClick={toggleLang} className="justify-start px-4 py-2.5 rounded-lg">
                  {lang === "en" ? "বাংলা" : "English"}
                </Button>
                <Button size="sm" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/25">
                  <a href="#pricing">{t("Get Started Free", "ফ্রি শুরু করুন")}</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
