import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase, ShieldCheck, Users, Plane, Star, Award, Clock, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-singapore.jpg";
import trainingImg from "@/assets/training.jpg";
import successImg from "@/assets/success.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "হোম | FutureStep — সিঙ্গাপুরে ক্যারিয়ার গড়ুন" },
      { name: "description", content: "BCA Skill প্রশিক্ষণ, বৈধ ভিসা প্রক্রিয়া ও সিঙ্গাপুরে নিশ্চিত কর্মসংস্থানের জন্য আপনার নির্ভরযোগ্য সঙ্গী FutureStep। আজই বিনামূল্যে কাউন্সেলিং নিন।" },
      { property: "og:title", content: "হোম | FutureStep — সিঙ্গাপুরে ক্যারিয়ার গড়ুন" },
      { property: "og:description", content: "BCA Skill প্রশিক্ষণ, ভিসা সহায়তা ও সিঙ্গাপুরে নিশ্চিত কর্মসংস্থান।" },
      { property: "og:url", content: "https://cozy-kind-orb.lovable.app/" },
      { property: "og:image", content: "https://cozy-kind-orb.lovable.app" + heroImg },
      { name: "twitter:title", content: "হোম | FutureStep — সিঙ্গাপুরে ক্যারিয়ার গড়ুন" },
      { name: "twitter:description", content: "BCA Skill প্রশিক্ষণ, ভিসা সহায়তা ও সিঙ্গাপুরে নিশ্চিত কর্মসংস্থান।" },
      { name: "twitter:image", content: "https://cozy-kind-orb.lovable.app" + heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://cozy-kind-orb.lovable.app/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "FutureStep",
        url: "https://cozy-kind-orb.lovable.app/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://cozy-kind-orb.lovable.app/courses?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    }],
  }),
  component: HomePage,
});

const features = [
  { icon: GraduationCap, title: "মান সম্মত প্রশিক্ষণ", desc: "অভিজ্ঞ প্রশিক্ষক ও আধুনিক ল্যাব সুবিধা।" },
  { icon: ShieldCheck, title: "বৈধ প্রক্রিয়া", desc: "BMET অনুমোদিত, স্বচ্ছ ও নিরাপদ পদ্ধতি।" },
  { icon: Briefcase, title: "নিশ্চিত নিয়োগ", desc: "সিঙ্গাপুরের নামকরা কোম্পানিতে চাকরি।" },
  { icon: Users, title: "ব্যক্তিগত সাপোর্ট", desc: "ভিসা থেকে যাত্রা পর্যন্ত প্রতিটি ধাপে সহায়তা।" },
];

const courses = [
  { title: "General Worker", duration: "১ বছরে BCA Skill", level: "এন্ট্রি" },
  { title: "Welder (6G)", duration: "১ বছরে BCA Skill", level: "প্রফেশনাল" },
  { title: "Safety Supervisor", duration: "১ বছরে BCA Skill", level: "সুপারভাইজরি" },
  { title: "Forklift Operator", duration: "১ বছরে BCA Skill", level: "অপারেটর" },
];

const stats = [
  { value: "৫০০০+", label: "সফল প্রার্থী" },
  { value: "১২+", label: "বছরের অভিজ্ঞতা" },
  { value: "৫০+", label: "পার্টনার কোম্পানি" },
  { value: "৯৮%", label: "ভিসা সাফল্যের হার" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Singapore skyline" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              <Star className="h-3 w-3" /> বাংলাদেশের অন্যতম বিশ্বস্ত প্রতিষ্ঠান
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              সিঙ্গাপুরে আপনার <span className="text-secondary">স্বপ্নের ক্যারিয়ার</span> শুরু হোক এখানে
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              FutureStep এর মাধ্যমে পান বিশ্বমানের প্রশিক্ষণ, বৈধ ভিসা প্রক্রিয়া ও সিঙ্গাপুরের নামকরা প্রতিষ্ঠানে নিশ্চিত কর্মসংস্থান।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                এখনই আবেদন করুন <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/courses" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20">
                কোর্স দেখুন
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-primary-foreground/15 bg-primary/95">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center text-primary-foreground sm:px-6 md:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-secondary">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">কেন আমরা?</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">আপনার বিশ্বাসই আমাদের শক্তি</h2>
          <p className="mt-3 text-muted-foreground">প্রতিটি ধাপে আপনার পাশে — প্রশিক্ষণ থেকে গন্তব্য পর্যন্ত।</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/15 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BCA Skill Badge */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-secondary/40 bg-gradient-to-br from-primary to-primary/90 p-8 text-primary-foreground shadow-2xl sm:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/15 px-4 py-2 text-sm font-bold text-secondary backdrop-blur">
                <Award className="h-5 w-5" /> BCA SKILL CERTIFIED
              </div>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">মাত্র ১ বছরে <span className="text-secondary">BCA Skill</span></h2>
              <p className="mt-3 max-w-lg text-primary-foreground/80">
                FutureStep এর সকল প্রশিক্ষণ BCA (Building & Construction Authority) স্ট্যান্ডার্ড অনুসরণ করে। সিঙ্গাপুরের লাইসেন্সড এমপ্লয়ার ও কনস্ট্রাকশন পার্টনারদের তত্ত্বাবধানে সিঙ্গাপুরের চাহিদামাফিক দক্ষতা অর্জনের নিশ্চয়তা।
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: "প্রশিক্ষণ সময়কাল", value: "১ বছর" },
                { icon: Target, label: "লক্ষ্য দেশ", value: "সিঙ্গাপুর" },
                { icon: ShieldCheck, label: "স্বীকৃতি", value: "BSM GROUP" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 text-center backdrop-blur">
                  <item.icon className="mx-auto h-8 w-8 text-secondary" />
                  <div className="mt-2 text-2xl font-bold">{item.value}</div>
                  <div className="text-xs text-primary-foreground/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["General Worker", "Welder", "Lifting Supervisor", "Safety Supervisor", "Site Supervisor", "Forklift Operator", "Rigger & Signal Man"].map((tag) => (
              <span key={tag} className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <img src={trainingImg} alt="Training facility" width={1280} height={960} loading="lazy" className="w-full rounded-2xl object-cover shadow-xl" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">আমাদের সম্পর্কে</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">১২ বছরের অভিজ্ঞতায় ভরসার নাম</h2>
            <p className="mt-4 text-muted-foreground">
              FutureStep বাংলাদেশের অগ্রগামী একটি ট্রেনিং সেন্টার যা সিঙ্গাপুরে কাজের সুযোগ তৈরিতে নিবেদিত। আমাদের রয়েছে সরকার অনুমোদিত প্রশিক্ষণ কর্মসূচি ও সিঙ্গাপুরের সাথে দীর্ঘমেয়াদী পার্টনারশিপ।
            </p>
            <ul className="mt-6 space-y-3">
              {["BMET অনুমোদিত প্রতিষ্ঠান", "আধুনিক প্রশিক্ষণ ল্যাব", "অভিজ্ঞ প্রশিক্ষক প্যানেল", "সিঙ্গাপুর কোম্পানির সাথে সরাসরি চুক্তি"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              বিস্তারিত জানুন <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular courses */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">জনপ্রিয় কোর্স</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">সিঙ্গাপুরে চাহিদাসম্পন্ন প্রশিক্ষণ</h2>
          </div>
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
            সব কোর্স <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-secondary hover:shadow-md">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 text-lg font-bold text-foreground">{c.title}</h3>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-muted px-2 py-1">{c.duration}</span>
                <span className="rounded-full bg-muted px-2 py-1">{c.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
          <div className="flex justify-center">
            <img src={successImg} alt="Success story" width={960} height={960} loading="lazy" className="aspect-square w-64 rounded-2xl object-cover shadow-2xl ring-4 ring-secondary/30" />
          </div>
          <div>
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <blockquote className="mt-5 text-xl font-medium leading-relaxed sm:text-2xl">
              “FutureStep এর প্রশিক্ষণ ও সহযোগিতার মাধ্যমে আজ আমি সিঙ্গাপুরের একটি নামকরা কোম্পানিতে ভালো বেতনে কাজ করছি। ভিসা থেকে যাত্রা — প্রতিটি ধাপে ওরা পাশে ছিল।”
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-secondary">মোঃ রফিকুল ইসলাম</div>
              <div className="text-sm text-primary-foreground/70">ওয়েল্ডার, সিঙ্গাপুর</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-primary/80 p-10 text-center text-primary-foreground sm:p-16">
          <Plane className="mx-auto h-12 w-12 text-secondary" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">আজই শুরু করুন আপনার যাত্রা</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">
            বিনামূল্যে পরামর্শের জন্য এখনই আমাদের সাথে যোগাযোগ করুন। আপনার সিঙ্গাপুর স্বপ্ন সত্যি করার দায়িত্ব আমাদের।
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground shadow-lg hover:-translate-y-0.5">
            যোগাযোগ করুন <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
