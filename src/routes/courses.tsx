import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { GraduationCap, Clock, Users, ArrowRight, Award, ShieldCheck, Target } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "কোর্সসমূহ | FutureStep — BCA Skill প্রশিক্ষণ" },
      { name: "description", content: "সিঙ্গাপুরে চাহিদাসম্পন্ন BCA Skill কোর্স — ওয়েল্ডিং, ইলেকট্রিশিয়ান, সেফটি সুপারভাইজার, ফর্কলিফট, রিগার ও আরও অনেক। ১ বছরের মধ্যে স্কিল সম্পন্ন।" },
      { property: "og:title", content: "কোর্সসমূহ | FutureStep — BCA Skill প্রশিক্ষণ" },
      { property: "og:description", content: "সিঙ্গাপুরে চাহিদাসম্পন্ন BCA Skill কোর্সসমূহ — ১ বছরের মধ্যে স্কিল সম্পন্ন।" },
      { property: "og:url", content: "https://cozy-kind-orb.lovable.app/courses" },
      { name: "twitter:title", content: "কোর্সসমূহ | FutureStep — BCA Skill প্রশিক্ষণ" },
      { name: "twitter:description", content: "সিঙ্গাপুরে চাহিদাসম্পন্ন BCA Skill কোর্সসমূহ।" },
    ],
    links: [
      { rel: "canonical", href: "https://cozy-kind-orb.lovable.app/courses" },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  { title: "General Worker", duration: "১ বছরের মধ্যে BCA Skill", seats: "৫০ জন", desc: "সিঙ্গাপুরের কনস্ট্রাকশন ও ম্যানুফ্যাকচারিং সেক্টরে এন্ট্রি লেভেল কাজের জন্য সম্পূর্ণ প্রশিক্ষণ।" },
  { title: "Welder (6G / 3G)", duration: "১ বছরের মধ্যে BCA Skill", seats: "৩০ জন", desc: "সিঙ্গাপুরের শিপইয়ার্ড ও কনস্ট্রাকশন সেক্টরে সবচেয়ে চাহিদাসম্পন্ন আন্তর্জাতিক মানের ওয়েল্ডিং কোর্স।" },
  { title: "Lifting Supervisor", duration: "১ বছরের মধ্যে BCA Skill", seats: "২০ জন", desc: "ক্রেন ও লিফটিং অপারেশন সুপারভিশন — সিঙ্গাপুর MOM স্বীকৃত ভূমিকার জন্য।" },
  { title: "Safety Supervisor", duration: "১ বছরের মধ্যে BCA Skill", seats: "২৫ জন", desc: "WSH (Workplace Safety & Health) সুপারভিশন — উচ্চ বেতনের চাহিদাসম্পন্ন পজিশন।" },
  { title: "Site Supervisor", duration: "১ বছরের মধ্যে BCA Skill", seats: "২০ জন", desc: "কনস্ট্রাকশন সাইট ম্যানেজমেন্ট, টিম লিডিং ও কোয়ালিটি কন্ট্রোলের পূর্ণাঙ্গ প্রশিক্ষণ।" },
  { title: "Forklift Operator", duration: "১ বছরের মধ্যে BCA Skill", seats: "৩০ জন", desc: "ফর্কলিফট অপারেশন ও সেফটি — লজিস্টিকস ও ওয়্যারহাউস সেক্টরে নিশ্চিত কাজ।" },
  { title: "Rigger & Signal Man", duration: "১ বছরের মধ্যে BCA Skill", seats: "২৫ জন", desc: "লিফটিং অপারেশনে রিগিং ও সিগন্যালিং — সিঙ্গাপুরে অপরিহার্য দক্ষতা।" },
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
            আমরা মূলত সিঙ্গাপুরে General Worker, Welder, Lifting Supervisor, Safety Supervisor, Site Supervisor, Forklift Operator ও Rigger/Signal Man পজিশনে কর্মী প্রেরণ করি। মাত্র <span className="font-bold text-secondary">১ বছরের মধ্যে BCA Skill</span> অর্জনের নিশ্চয়তা।
          </p>
        </div>
      </section>

      {/* BCA Skill Badge */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-secondary/40 bg-gradient-to-br from-primary to-primary/90 p-8 text-primary-foreground shadow-2xl sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-secondary/30 bg-secondary/15">
              <Award className="h-10 w-10 text-secondary" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/15 px-3 py-1 text-xs font-bold text-secondary">
                <ShieldCheck className="h-3.5 w-3.5" /> BCA SKILL CERTIFIED PROGRAM
              </div>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">মাত্র ১ বছরের মধ্যে BCA Skill অর্জন</h2>
              <p className="mt-2 max-w-2xl text-primary-foreground/80">
                FutureStep এর সকল কোর্স সিঙ্গাপুরের Building & Construction Authority (BCA) স্ট্যান্ডার্ড অনুসারে পরিচালিত। BSM GROUP Singapore এর সরাসরি তত্ত্বাবধানে প্রশিক্ষণ — সিঙ্গাপুরে নিশ্চিত ক্যারিয়ারের জন্য।
              </p>
            </div>
            <div className="grid w-full gap-3 sm:w-auto sm:grid-cols-2 lg:w-auto">
              <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-center">
                <Clock className="mx-auto h-6 w-6 text-secondary" />
                <div className="mt-1 text-xl font-bold">১ বছর</div>
                <div className="text-xs text-primary-foreground/70">সময়কাল</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-center">
                <Target className="mx-auto h-6 w-6 text-secondary" />
                <div className="mt-1 text-xl font-bold">সিঙ্গাপুর</div>
                <div className="text-xs text-primary-foreground/70">গন্তব্য</div>
              </div>
            </div>
          </div>
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
