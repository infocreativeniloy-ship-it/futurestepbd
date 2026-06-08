import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { GraduationCap, Clock, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "কোর্সসমূহ — FutureStep" },
      { name: "description", content: "সিঙ্গাপুরে চাহিদাসম্পন্ন কোর্সসমূহ — ওয়েল্ডিং, ইলেকট্রিশিয়ান, কনস্ট্রাকশন সেফটি, হসপিটালিটি এবং আরও অনেক।" },
      { property: "og:title", content: "কোর্সসমূহ — FutureStep" },
      { property: "og:description", content: "FutureStep এর প্রশিক্ষণ কর্মসূচি সম্পর্কে জানুন।" },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  { title: "ওয়েল্ডিং (৬G প্রফেশনাল)", duration: "৩ মাস", seats: "২০ জন", desc: "সিঙ্গাপুরের কনস্ট্রাকশন ও শিপইয়ার্ড সেক্টরে চাহিদাসম্পন্ন আন্তর্জাতিক মানের ওয়েল্ডিং প্রশিক্ষণ।" },
  { title: "ইলেকট্রিশিয়ান", duration: "৩ মাস", seats: "২৫ জন", desc: "ইন্ডাস্ট্রিয়াল ও বাণিজ্যিক ভবনের বৈদ্যুতিক সিস্টেম স্থাপন ও মেরামতের পূর্ণাঙ্গ কোর্স।" },
  { title: "কনস্ট্রাকশন সেফটি (CSOC)", duration: "১ মাস", seats: "৩০ জন", desc: "সিঙ্গাপুরে কাজ শুরুর জন্য বাধ্যতামূলক সেফটি ট্রেনিং ও সার্টিফিকেশন।" },
  { title: "হোটেল ও হসপিটালিটি", duration: "২ মাস", seats: "২০ জন", desc: "হাউসকিপিং, F&B সার্ভিস ও কাস্টমার কেয়ার — সিঙ্গাপুরের ৫-স্টার হসপিটালিটি স্ট্যান্ডার্ডে।" },
  { title: "প্লাম্বিং ও পাইপ ফিটিং", duration: "২ মাস", seats: "২০ জন", desc: "আধুনিক প্লাম্বিং সিস্টেম ইনস্টলেশন ও মেইনটেন্যান্সের বিস্তারিত প্রশিক্ষণ।" },
  { title: "ক্লিনিং ও মেইনটেন্যান্স", duration: "১ মাস", seats: "৪০ জন", desc: "কমার্শিয়াল ক্লিনিং, কেমিক্যাল হ্যান্ডলিং ও ইকুইপমেন্ট অপারেশন।" },
];

function CoursesPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">প্রশিক্ষণ কর্মসূচি</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">আমাদের কোর্সসমূহ</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            সিঙ্গাপুরের চাহিদা অনুযায়ী সাজানো কোর্স। প্রতিটি কোর্স শেষে আন্তর্জাতিক মানের সার্টিফিকেট প্রদান করা হয়।
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/15 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.seats}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-muted/50 p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground">কোন কোর্সটি আপনার জন্য?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">আমাদের কাউন্সেলরদের সাথে কথা বলে আপনার যোগ্যতা ও লক্ষ্য অনুযায়ী সঠিক কোর্স বেছে নিন।</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            বিনামূল্যে পরামর্শ নিন <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
