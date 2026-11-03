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
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.6}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[150%] skew-y-12"
        )}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-8 gap-2 px-4 py-1.5 bg-background/80 backdrop-blur border-blue-200/40 dark:border-blue-800/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              {t("AI-Powered E-Commerce Automation", "এআই-চালিত ই-কমার্স অটোমেশন")}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
          >
            <span className="text-foreground">
              {t("Build Your Online Shop.", "আপনার অনলাইন শপ তৈরি করুন।")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t("Automate Chats. Create Orders.", "চ্যাট অটোমেট করুন। অর্ডার তৈরি করুন।")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            {t(
              "AI builds your store, replies to customers on WhatsApp & Facebook Messenger, and creates orders directly in your central dashboard.",
              "এআই আপনার দোকান তৈরি করে, WhatsApp ও Facebook Messenger-এ গ্রাহকদের স্বয়ংক্রিয়ভাবে রিপ্লাই করে এবং সেন্ট্রাল ড্যাশবোর্ডে সরাসরি অর্ডার তৈরি করে।"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" className="gap-2 text-white bg-blue-600">
              <a href="#pricing" className="flex items-center gap-2">
                {t("Get Started Free", "ফ্রি শুরু করুন")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-background/80 backdrop-blur border-blue-200/60 hover:bg-blue-50 dark:border-blue-800/60 dark:hover:bg-blue-950/40" onClick={() => window.dispatchEvent(new CustomEvent('open-hero-video'))}>
              <Play className="h-4 w-4" />
              {t("Watch Live Demo", "লাইভ ডেমো দেখুন")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-3xl border shadow-2xl shadow-blue-900/10">
            <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
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
