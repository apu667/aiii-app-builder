"use client";

import { Cable, Brain, Rocket } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";

export function HowItWorks() {
  const { t } = useLang();

  const steps = [
    {
      number: "01",
      icon: Cable,
      title: t("Connect Channels", "চ্যানেল কানেক্ট করুন"),
      description: t(
        "Link your WhatsApp Business and Facebook Messenger in one click to unify all customer conversations.",
        "WhatsApp Business ও Facebook Messenger এক ক্লিকে কানেক্ট করে সব কথোপকথন একত্রে করুন।"
      ),
    },
    {
      number: "02",
      icon: Brain,
      title: t("AI Training & Setup", "এআই ট্রেনিং ও সেটআপ"),
      description: t(
        "AI learns your products, pricing, and FAQs to automatically respond with accurate, personalized replies.",
        "এআই আপনার পণ্য, মূল্য ও প্রশ্নের উত্তর শিখে স্বয়ংক্রিয়ভাবে নির্ভুল উত্তর দেয়।"
      ),
    },
    {
      number: "03",
      icon: Rocket,
      title: t("Auto Sales & Orders", "স্বয়ংক্রিয় বিক্রয় ও অর্ডার"),
      description: t(
        "Conversations convert to orders automatically and sync to your dashboard with full order tracking.",
        "কথোপকথন থেকে স্বয়ংক্রিয়ভাবে অর্ডার তৈরি হয় এবং সম্পূর্ণ ট্র্যাকিংসহ ড্যাশবোর্ডে সিঙ্ক হয়।"
      ),
    },
  ];

  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("How It Works", "কিভাবে কাজ করে")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t("From setup to sales in 3 simple steps", "সেটআপ থেকে বিক্রয় পর্যন্ত ৩টি সহজ ধাপে")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-violet-50">
                  <step.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-3xl font-bold text-gray-200">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
