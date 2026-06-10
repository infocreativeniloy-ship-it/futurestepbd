import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Target, Eye, Award, Users, ShieldCheck } from "lucide-react";
import trainingImg from "@/assets/training.jpg";
import licenseAsset from "@/assets/trade-license.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "আমাদের সম্পর্কে — FutureStep" },
      { name: "description", content: "FutureStep সম্পর্কে জানুন — মিশন, ভিশন, এবং সিঙ্গাপুরে দক্ষ জনশক্তি প্রেরণে আমাদের অভিজ্ঞতা।" },
      { property: "og:title", content: "আমাদের সম্পর্কে — FutureStep" },
      { property: "og:description", content: "১২ বছরের অভিজ্ঞতায় বাংলাদেশ থেকে সিঙ্গাপুরে ক্যারিয়ার গড়ার বিশ্বস্ত প্রতিষ্ঠান।" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">আমাদের সম্পর্কে</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">বাংলাদেশ থেকে সিঙ্গাপুর — বিশ্বাসের সেতুবন্ধন</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            FutureStep একটি BMET অনুমোদিত প্রতিষ্ঠান যা ২০১২ সাল থেকে বাংলাদেশী তরুণদের সিঙ্গাপুরে দক্ষ পেশাজীবী হিসেবে গড়ে তুলতে কাজ করছে।
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={trainingImg} alt="Training" width={1280} height={960} loading="lazy" className="rounded-2xl shadow-xl" />
        <div>
          <h2 className="text-3xl font-bold text-foreground">আমাদের গল্প</h2>
          <p className="mt-4 text-muted-foreground">
            ছোট পরিসরে শুরু করে আজ আমরা বাংলাদেশের অন্যতম শীর্ষ ট্রেনিং সেন্টারে পরিণত হয়েছি। ৫০০০+ সফল প্রার্থী এবং ৫০+ সিঙ্গাপুর কোম্পানির সাথে সরাসরি পার্টনারশিপ আমাদের বিশ্বাসযোগ্যতার প্রমাণ।
          </p>
          <p className="mt-3 text-muted-foreground">
            আমাদের লক্ষ্য — প্রতিটি যোগ্য প্রার্থীর জন্য একটি সম্মানজনক, সুরক্ষিত ও লাভজনক বিদেশ ক্যারিয়ার নিশ্চিত করা।
          </p>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Target, title: "মিশন", desc: "যোগ্য জনশক্তি তৈরি করে আন্তর্জাতিক শ্রমবাজারে বাংলাদেশের অবস্থান শক্তিশালী করা।" },
            { icon: Eye, title: "ভিশন", desc: "দক্ষিণ এশিয়ার শ্রেষ্ঠ ও বিশ্বস্ত ওভারসিজ ট্রেনিং প্রতিষ্ঠান হওয়া।" },
            { icon: Award, title: "মূল্যবোধ", desc: "স্বচ্ছতা, সততা, এবং প্রার্থীর সাফল্যকে সর্বোচ্চ অগ্রাধিকার।" },
            { icon: Users, title: "টিম", desc: "অভিজ্ঞ প্রশিক্ষক, আইনজীবী ও কাউন্সেলরদের নিবেদিত দল।" },
          ].map((it) => (
            <div key={it.title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="license" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              <ShieldCheck className="h-4 w-4" /> বৈধ ও অনুমোদিত প্রতিষ্ঠান
            </div>
            <h2 className="mt-4 text-3xl font-bold text-foreground">আমাদের ট্রেড লাইসেন্স</h2>
            <p className="mt-4 text-muted-foreground">
              FutureStep (Future Step Youth Development Training Center) পাথালিয়া ইউনিয়ন পরিষদ, আশুলিয়া, সাভার, ঢাকা কর্তৃক বৈধভাবে নিবন্ধিত একটি ট্রেনিং সেন্টার।
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">প্রতিষ্ঠানের নাম</dt><dd className="font-semibold text-foreground">Future Step Youth Development Training Center</dd></div>
              <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">License No</dt><dd className="font-semibold text-foreground">009624</dd></div>
              <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Trade License No</dt><dd className="font-semibold text-foreground">2026261727200 9624</dd></div>
              <div className="flex justify-between border-b border-border pb-2"><dt className="text-muted-foreground">Issue Date</dt><dd className="font-semibold text-foreground">04-06-2026</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Valid Till</dt><dd className="font-semibold text-foreground">30-06-2026 (বার্ষিক নবায়নযোগ্য)</dd></div>
            </dl>
          </div>
          <a href={licenseAsset.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border border-border shadow-xl transition hover:shadow-2xl">
            <img src={licenseAsset.url} alt="FutureStep Trade License — Pathalia Union Parishad" loading="lazy" className="h-full w-full object-cover" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
