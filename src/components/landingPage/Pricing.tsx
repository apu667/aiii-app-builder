"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function Pricing() {
  const { t } = useLang();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: t("Starter", "স্টার্টার"),
      price: isYearly ? "$29" : "$39",
      period: isYearly ? t("/year", "/বছর") : t("/month", "/মাস"),
      description: t("Perfect for small businesses", "ছোট ব্যবসার জন্য উপযুক্ত"),
      features: [
        t("1 Online Store", "১টি অনলাইন স্টোর"),
        t("WhatsApp & Messenger", "WhatsApp ও Messenger"),
        t("AI Auto-Replies", "এআই স্বয়ংক্রিয় উত্তর"),
        t("Basic Dashboard", "বেসিক ড্যাশবোর্ড"),
        t("100 Orders/month", "১০০ অর্ডার/মাস"),
      ],
      popular: false,
    },
    {
      name: t("Pro", "প্রো"),
      price: isYearly ? "$79" : "$99",
      period: isYearly ? t("/year", "/বছর") : t("/month", "/মাস"),
      description: t("Most popular for growing businesses", "বর্ধমান ব্যবসার জন্য সবচেয়ে জনপ্রিয়"),
      features: [
        t("3 Online Stores", "৩টি অনলাইন স্টোর"),
        t("Omnichannel AI Messaging", "ওমনিক্যানেল এআই মেসেজিং"),
        t("Advanced AI Training", "উন্নত এআই ট্রেনিং"),
        t("Real-time Analytics", "রিয়েল-টাইম অ্যানালিটিক্স"),
        t("Unlimited Orders", "আনলিমিটেড অর্ডার"),
        t("Priority Support", "প্রায়োরিটি সাপোর্ট"),
      ],
      popular: true,
    },
    {
      name: t("Enterprise", "এন্টারপ্রাইজ"),
      price: t("Custom", "কাস্টম"),
      period: "",
      description: t("For large scale operations", "বড় স্কেলের জন্য"),
      features: [
        t("Unlimited Stores", "আনলিমিটেড স্টোর"),
        t("Custom AI Models", "কাস্টম এআই মডেল"),
        t("White-label Solution", "হোয়াইট-লেবেল সলিউশন"),
        t("Advanced Integrations", "উন্নত ইন্টিগ্রেশন"),
        t("Dedicated Account Manager", "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার"),
        t("SLA Guarantee", "SLA গ্যারান্টি"),
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {t("Simple, Transparent Pricing", "সহজ, স্বচ্ছ মূল্য")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-xl mx-auto leading-relaxed">
            {t("Choose the plan that fits your business", "আপনার ব্যবসার জন্য উপযুক্ত প্ল্যান বাছুন")}
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>{t("Monthly", "মাসিক")}</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="scale-110" />
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              {t("Yearly", "বার্ষিক")} <span className="text-emerald-600">{t("Save 20%", "২০% ছাড়")}</span>
            </span>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pt-4"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 rounded-lg bg-blue-600 text-xs font-semibold text-white shadow-lg shadow-blue-600/30">
                    {t("Most Popular", "সবচেয়ে জনপ্রিয়")}
                  </span>
                </div>
              )}
              <Card className={`h-full flex flex-col group relative overflow-hidden ${plan.popular ? "border-blue-500 shadow-xl shadow-blue-500/20 bg-blue-50/10" : "border-white/20 bg-background/50 backdrop-blur-sm hover:bg-background hover:shadow-xl hover:-translate-y-2 transition-all duration-500"} rounded-xl`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
                )}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold tracking-tight">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className={`w-full ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 rounded-lg" : "bg-background/50 text-foreground border-white/20 hover:bg-background hover:border-white/40 rounded-lg"}`} variant={plan.popular ? "default" : "outline"}>
                    {t("Get Started", "শুরু করুন")}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
