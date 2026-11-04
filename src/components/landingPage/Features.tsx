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
    <section id="features" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {t("Everything You Need to Automate Sales", "বিক্রয় স্বয়ংক্রিয় করতে যা প্রয়োজন")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-xl mx-auto leading-relaxed">
            {t(
              "Powerful features designed to turn conversations into conversions",
              "কথোপকথনকে কনভার্সনে রূপান্তর করার জন্য ডিজাইন করা শক্তিশালী ফিচার"
            )}
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full group relative overflow-hidden border border-white/20 bg-background/50 backdrop-blur-sm hover:bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50/50 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="leading-relaxed text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
