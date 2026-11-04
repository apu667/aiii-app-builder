"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/40 to-transparent pointer-events-none sm:from-blue-50/30"></div>
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.4}
        duration={4}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-15%] h-[120%] skew-y-8 -z-10"
        )}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mx-auto mb-10 gap-2.5 px-5 py-2 rounded-lg bg-background/70 backdrop-blur-md border-blue-100/50 dark:border-blue-900/20 shadow-xl shadow-blue-100/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-70"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500"></span>
              </span>
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              {t("AI-Powered E-Commerce Automation", "এআই-চালিত ই-কমার্স অটোমেশন")}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight"
          >
            <span className="text-foreground">
              {t("Build Your Online Shop.", "আপনার অনলাইন শপ তৈরি করুন।")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t("Automate Chats. Create Orders.", "চ্যাট অটোমেট করুন। অর্ডার তৈরি করুন।")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
          >
            {t(
              "AI builds your store, replies to customers on WhatsApp & Facebook Messenger, and creates orders directly in your central dashboard.",
              "এআই আপনার দোকান তৈরি করে, WhatsApp ও Facebook Messenger-এ গ্রাহকদের স্বয়ংক্রিয়ভাবে রিপ্লাই করে এবং সেন্ট্রাল ড্যাশবোর্ডে সরাসরি অর্ডার তৈরি করে।"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Button size="lg" className="gap-2.5 text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 px-8 py-3.5 rounded-lg transition-all">
              <a href="#pricing" className="flex items-center gap-2">
                {t("Get Started Free", "ফ্রি শুরু করুন")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2.5 bg-background/70 backdrop-blur border-gray-200 hover:bg-gray-50 hover:text-foreground dark:border-gray-700 dark:hover:bg-gray-800 px-8 py-3.5 rounded-lg transition-all" onClick={() => window.dispatchEvent(new CustomEvent('open-hero-video'))}>
              <Play className="h-4 w-4" />
              {t("Watch Live Demo", "লাইভ ডেমো দেখুন")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/10">
            <div className="relative w-full overflow-hidden rounded-xl">
              <HeroVideoDialog
                className="w-full h-full"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I"
                thumbnailSrc="https://img.magnific.com/free-vector/modern-business-analytics-dashboard-with-financial-data-performance-charts_1308-195500.jpg?t=st=1793687712~exp=1793691312~hmac=a6d75594d34a85c74e53e379647fba8da60e456d926f893d7c04890ee6b2b18d&w=1480"
                thumbnailAlt="SellMet AI Dashboard Demo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
