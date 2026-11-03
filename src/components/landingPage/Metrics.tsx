"use client";

import { useLang } from "@/lib/lang-context";

export function Metrics() {
  const { t } = useLang();

  const stats = [
    { value: "10K+", label: t("Orders Auto-Processed", "অর্ডার স্বয়ংক্রিয়ভাবে প্রক্রিয়াকৃত") },
    { value: "99.8%", label: t("Response Speed", "রেসপন্স স্পিড") },
    { value: "24/7", label: t("Automation", "স্বয়ংক্রিয় সেবা") },
    { value: "< 30s", label: t("Avg. Order Creation", "গড় অর্ডার তৈরির সময়") },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
