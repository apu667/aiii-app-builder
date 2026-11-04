
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("What is SellMet AI?", "SellMet AI কি?"),
      answer: t(
        "SellMet AI is an AI-driven e-commerce automation platform that builds online shops, handles customer chats via WhatsApp & Facebook Messenger with automated smart replies, and creates orders directly inside a central dashboard.",
        "SellMet AI হল একটি এআই-চালিত ই-কমার্স অটোমেশন প্ল্যাটফর্ম যা অনলাইন শপ তৈরি করে, WhatsApp ও Facebook Messenger-এ গ্রাহকদের চ্যাট স্বয়ংক্রিয়ভাবে রিপ্লাই করে এবং সেন্ট্রাল ড্যাশবোর্ডে সরাসরি অর্ডার তৈরি করে।"
      ),
    },
    {
      question: t(
        "How does AI auto-reply work?",
        "এআই অটোমেটিক রিপ্লাই কিভাবে কাজ করে?"
      ),
      answer: t(
        "Our AI learns your product catalog, pricing, and FAQs. When a customer messages, it understands their intent and responds with relevant information, product details, or payment links automatically.",
        "আমাদের এআই আপনার পণ্য তালিকা, মূল্য এবং সাধারণ প্রশ্ন শিখে নেয়। গ্রাহক মেসেজ করলে এটি তাদের উদ্দেশ্য বুঝে প্রাসঙ্গিক তথ্য, পণ্য বিবরণ বা পেমেন্ট লিংক স্বয়ংক্রিয়ভাবে পাঠায়।"
      ),
    },
    {
      question: t(
        "Which platforms are supported?",
        "কোন প্ল্যাটফর্মগুলো সাপোর্ট করে?"
      ),
      answer: t(
        "We support WhatsApp Business API and Facebook Messenger. More channels like Instagram and Telegram will be added soon.",
        "আমরা WhatsApp Business API এবং Facebook Messenger সাপোর্ট করি। শীঘ্রই Instagram, Telegram সহ আরো চ্যানেল যোগ করা হবে।"
      ),
    },
    {
      question: t("Is there a free trial?", "ফ্রি ট্রায়াল আছে কি?"),
      answer: t(
        "Yes! You can start for free with our Starter plan. No credit card required to get started.",
        "হ্যাঁ! আপনি আমাদের Starter প্ল্যান দিয়ে বিনামূল্যে শুরু করতে পারেন। শুরু করতে কোনো ক্রেডিট কার্ডের প্রয়োজন নেই।"
      ),
    },
    {
      question: t("How are orders created?", "কিভাবে অর্ডার তৈরি হয়?"),
      answer: t(
        "When a customer confirms they want to buy through chat, the AI collects necessary details and creates a complete order in your dashboard with customer info, products, and payment status.",
        "গ্রাহক চ্যাটে কিনতে রাজি হলে, এআই প্রয়োজনীয় তথ্য সংগ্রহ করে আপনার ড্যাশবোর্ডে সম্পূর্ণ অর্ডার তৈরি করে — গ্রাহকের তথ্য, পণ্য এবং পেমেন্ট স্ট্যাটাসসহ।"
      ),
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600">
            {t("FAQ", "সাধারণ প্রশ্ন")}
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("Frequently Asked Questions", "সাধারণ জিজ্ঞাসা")}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(
              "Everything you need to know about SellMet AI",
              "SellMet AI সম্পর্কে আপনার জানা দরকার সবকিছু"
            )}
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-16 max-w-3xl space-y-3 sm:mt-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className={`group rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-background/80 shadow-lg shadow-emerald-500/5"
                    : "bg-background/40 hover:bg-background/70"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                >
                  <span
                    className={`text-base font-semibold leading-relaxed transition-colors duration-300 sm:text-lg ${
                      isOpen
                        ? "text-emerald-600"
                        : "text-foreground group-hover:text-emerald-600"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-emerald-500 text-white"
                        : "bg-muted text-muted-foreground group-hover:bg-emerald-500/10 group-hover:text-emerald-600"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                        <div className="mb-4 h-px w-full bg-gradient-to-r from-emerald-500/20 via-border to-transparent" />

                        <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          {t(
            "Still have questions? We're here to help.",
            "এখনো প্রশ্ন আছে? আমরা সাহায্য করতে প্রস্তুত।"
          )}
        </p>
      </div>
    </section>
  );
}
