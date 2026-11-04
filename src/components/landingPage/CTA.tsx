"use client";

import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/button";

export function CTA() {
  const { t } = useLang();

  return (
    <section className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-blue-600 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
              {t("Start Selling Smarter Today", "আজ থেকেই স্মার্টভাবে বিক্রয় শুরু করুন")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 sm:text-xl leading-relaxed">
              {t(
                "Join thousands of businesses automating their sales with AI-powered chat and order management",
                "এআই-চালিত চ্যাট ও অর্ডার ম্যানেজমেন্ট দিয়ে হাজারো ব্যবসা স্বয়ংক্রিয়ভাবে বিক্রয় করছে"
              )}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-lg">
                <a href="#pricing" className="flex items-center gap-2">
                  {t("Get Started Free", "ফ্রি শুরু করুন")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg">
                {t("Schedule a Demo", "ডেমো শিডিউল করুন")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
