"use client";

import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQ() {
  const { t } = useLang();

  const faqs = [
    {
      question: t("What is SellMet AI?", "SellMet AI কি?"),
      answer: t(
        "SellMet AI is an AI-driven e-commerce automation platform that builds online shops, handles customer chats via WhatsApp & Facebook Messenger with automated smart replies, and creates orders directly inside a central dashboard.",
        "SellMet AI হল একটি এআই-চালিত ই-কমার্স অটোমেশন প্ল্যাটফর্ম যা অনলাইন শপ তৈরি করে, WhatsApp ও Facebook Messenger-এ গ্রাহকদের চ্যাট স্বয়ংক্রিয়ভাবে রিপ্লাই করে এবং সেন্ট্রাল ড্যাশবোর্ডে সরাসরি অর্ডার তৈরি করে।"
      ),
    },
    {
      question: t("How does AI auto-reply work?", "এআই অটোমেটিক রিপ্লাই কিভাবে কাজ করে?"),
      answer: t(
        "Our AI learns your product catalog, pricing, and FAQs. When a customer messages, it understands their intent and responds with relevant information, product details, or payment links automatically.",
        "আমাদের এআই আপনার পণ্য তালিকা, মূল্য এবং সাধারণ প্রশ্ন শিখে নেয়। গ্রাহক মেসেজ করলে এটি তাদের উদ্দেশ্য বুঝে প্রাসঙ্গিক তথ্য, পণ্য বিবরণ বা পেমেন্ট লিংক স্বয়ংক্রিয়ভাবে পাঠায়।"
      ),
    },
    {
      question: t("Which platforms are supported?", "কোন প্ল্যাটফর্মগুলো সাপোর্ট করে?"),
      answer: t(
        "We support WhatsApp Business API and Facebook Messenger. More channels like Instagram, Telegram will be added soon.",
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
        "গ্রাহক চ্যাটে কিনতে রাজি হলে, এআই প্রয়োজনীয় তথ্য সংগ্রহ করে আপনার ড্যাশবোর্ডে সম্পূর্ণ অর্ডার তৈরি করে - গ্রাহকের তথ্য, পণ্য এবং পেমেন্ট স্ট্যাটাসসহ।"
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("Frequently Asked Questions", "সাধারণ জিজ্ঞাসা")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t("Everything you need to know about SellMet AI", "SellMet AI সম্পর্কে আপনার জানা দরকার সবকিছু")}
          </p>
        </div>

        <div className="mt-12">
          <Accordion className="space-y-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={faq.question}>
                <AccordionTrigger className="flex items-center justify-between p-5 text-left text-sm font-medium transition-colors hover:bg-muted/50">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 text-muted-foreground" />
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-5">
                  <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
