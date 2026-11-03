"use client";

import { Store, MessageCircle, LayoutDashboard, BarChart3 } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const { t } = useLang();

  const features = [
    {
      icon: Store,
      title: t("AI Store Builder", "এআই স্টোর বিল্ডার"),
      description: t(
        "Create a complete online store in minutes with AI-powered product catalog setup and smart layouts.",
        "এআই দিয়ে কয়েক মিনিটেই সম্পূর্ণ অনলাইন স্টোর তৈরি করুন, প্রোডাক্ট ক্যাটালগ ও স্মার্ট লেআউট সহ।"
      ),
    },
    {
      icon: MessageCircle,
      title: t("Omnichannel AI Messaging", "ওমনিক্যানেল এআই মেসেজিং"),
      description: t(
        "Seamlessly sync WhatsApp & Facebook Messenger with intelligent AI that learns and responds 24/7.",
        "WhatsApp ও Facebook Messenger স্বয়ংক্রিয়ভাবে কানেক্ট করে, এআই ২৪/৭ বুদ্ধিমত্তার সাথে রিপ্লাই করে।"
      ),
    },
    {
      icon: LayoutDashboard,
      title: t("Instant Dashboard Sync", "ইন্সট্যান্ট ড্যাশবোর্ড সিঙ্ক"),
      description: t(
        "Turn every conversation into an order instantly. All orders sync to your central dashboard in real-time.",
        "প্রতিটি কথোপকথন থেকে সাথে সাথে অর্ডার তৈরি হয় এবং সেন্ট্রাল ড্যাশবোর্ডে রিয়েল-টাইমে সিঙ্ক হয়।"
      ),
    },
    {
      icon: BarChart3,
      title: t("Analytics & Conversion Insights", "অ্যানালিটিক্স ও কনভার্সন ইনসাইট"),
      description: t(
        "Track sales, response rates, and conversion metrics with beautiful visual charts and actionable insights.",
        "সেলস, রেসপন্স রেট, কনভার্সন ট্র্যাক করুন সুন্দর চার্ট ও ব্যবহারযোগ্য ইনসাইটসহ।"
      ),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("Everything You Need to Automate Sales", "বিক্রয় স্বয়ংক্রিয় করতে যা প্রয়োজন")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              "Powerful features designed to turn conversations into conversions",
              "কথোপকথনকে কনভার্সনে রূপান্তর করার জন্য ডিজাইন করা শক্তিশালী ফিচার"
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                    <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
