
"use client";

import { useLang } from "@/lib/lang-context";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export function Metrics() {
  const { t } = useLang();

  const stats = [
    {
      value: "10K+",
      label: t("Orders Auto-Processed", "অর্ডার স্বয়ংক্রিয়ভাবে প্রক্রিয়াকৃত"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: "99.8%",
      label: t("Response Speed", "রেসপন্স স্পিড"),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      value: "24/7",
      label: t("Automation", "স্বয়ংক্রিয় সেবা"),
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      value: "< 30s",
      label: t("Avg. Order Creation", "গড় অর্ডার তৈরির সময়"),
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-background/50 backdrop-blur-xl p-8 shadow-2xl shadow-black/5 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group border-0 bg-transparent p-0 text-center shadow-none outline-none ring-0 transition-colors duration-300 hover:bg-white/5"
            >
              <CardContent className="border-0 p-0 pt-0 pb-6">
                <div className="mb-3">
                  <div
                    className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-105 sm:text-4xl`}
                  >
                    {stat.value}
                  </div>
                </div>

                <CardDescription className="text-sm font-medium">
                  {stat.label}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
