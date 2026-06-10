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
  { title: "General Worker", duration: "১ বছরের মধ্যে BCS Skill", seats: "৫০ জন", desc: "সিঙ্গাপুরের কনস্ট্রাকশন ও ম্যানুফ্যাকচারিং সেক্টরে এন্ট্রি লেভেল কাজের জন্য সম্পূর্ণ প্রশিক্ষণ।" },
  { title: "Welder (6G / 3G)", duration: "১ বছরের মধ্যে BCS Skill", seats: "৩০ জন", desc: "সিঙ্গাপুরের শিপইয়ার্ড ও কনস্ট্রাকশন সেক্টরে সবচেয়ে চাহিদাসম্পন্ন আন্তর্জাতিক মানের ওয়েল্ডিং কোর্স।" },
  { title: "Lifting Supervisor", duration: "১ বছরের মধ্যে BCS Skill", seats: "২০ জন", desc: "ক্রেন ও লিফটিং অপারেশন সুপারভিশন — সিঙ্গাপুর MOM স্বীকৃত ভূমিকার জন্য।" },
  { title: "Safety Supervisor", duration: "১ বছরের মধ্যে BCS Skill", seats: "২৫ জন", desc: "WSH (Workplace Safety & Health) সুপারভিশন — উচ্চ বেতনের চাহিদাসম্পন্ন পজিশন।" },
  { title: "Site Supervisor", duration: "১ বছরের মধ্যে BCS Skill", seats: "২০ জন", desc: "কনস্ট্রাকশন সাইট ম্যানেজমেন্ট, টিম লিডিং ও কোয়ালিটি কন্ট্রোলের পূর্ণাঙ্গ প্রশিক্ষণ।" },
  { title: "Forklift Operator", duration: "১ বছরের মধ্যে BCS Skill", seats: "৩০ জন", desc: "ফর্কলিফট অপারেশন ও সেফটি — লজিস্টিকস ও ওয়্যারহাউস সেক্টরে নিশ্চিত কাজ।" },
  { title: "Rigger & Signal Man", duration: "১ বছরের মধ্যে BCS Skill", seats: "২৫ জন", desc: "লিফটিং অপারেশনে রিগিং ও সিগন্যালিং — সিঙ্গাপুরে অপরিহার্য দক্ষতা।" },
  { title: "Construction Safety (CSOC)", duration: "১ মাস", seats: "৪০ জন", desc: "সিঙ্গাপুরে কাজ শুরুর জন্য বাধ্যতামূলক সেফটি ওরিয়েন্টেশন ও সার্টিফিকেশন।" },
];


function CoursesPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">প্রশিক্ষণ কর্মসূচি</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">সিঙ্গাপুরের চাহিদাসম্পন্ন ক্যাটাগরি</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            আমরা মূলত সিঙ্গাপুরে General Worker, Welder, Lifting Supervisor, Safety Supervisor, Site Supervisor, Forklift Operator ও Rigger/Signal Man পজিশনে কর্মী প্রেরণ করি। মাত্র <span className="font-bold text-secondary">১ বছরের মধ্যে BCS Skill</span> অর্জনের নিশ্চয়তা।
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
