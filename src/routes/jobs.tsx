import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Briefcase, MapPin, DollarSign, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "চাকরির সুযোগ | FutureStep — সিঙ্গাপুরে কর্মসংস্থান" },
      { name: "description", content: "সিঙ্গাপুরে বিভিন্ন সেক্টরে চাকরির সুযোগ — কনস্ট্রাকশন, হসপিটালিটি, এমঅ্যান্ডই সহ আরও অনেক। বেতন SGD এ।" },
      { property: "og:title", content: "চাকরির সুযোগ | FutureStep — সিঙ্গাপুরে কর্মসংস্থান" },
      { property: "og:description", content: "সিঙ্গাপুরে কর্মসংস্থানের সম্ভাবনা ও বেতন কাঠামো।" },
      { property: "og:url", content: "https://cozy-kind-orb.lovable.app/jobs" },
      { name: "twitter:title", content: "চাকরির সুযোগ | FutureStep — সিঙ্গাপুরে কর্মসংস্থান" },
      { name: "twitter:description", content: "সিঙ্গাপুরে কর্মসংস্থানের সম্ভাবনা ও বেতন কাঠামো।" },
    ],
    links: [
      { rel: "canonical", href: "https://cozy-kind-orb.lovable.app/jobs" },
    ],
  }),
  component: JobsPage,
});

const jobs = [
  { title: "ওয়েল্ডার (6G)", location: "জুরং, সিঙ্গাপুর", salary: "$১,৮০০ – $২,৫০০", sector: "কনস্ট্রাকশন" },
  { title: "কনস্ট্রাকশন ওয়ার্কার", location: "টুয়াস, সিঙ্গাপুর", salary: "$১,২০০ – $১,৬০০", sector: "কনস্ট্রাকশন" },
  { title: "ইলেকট্রিশিয়ান", location: "সেন্ট্রাল, সিঙ্গাপুর", salary: "$১,৫০০ – $২,২০০", sector: "এমঅ্যান্ডই" },
  { title: "হোটেল হাউসকিপিং", location: "মেরিনা বে", salary: "$১,৩০০ – $১,৭০০", sector: "হসপিটালিটি" },
  { title: "F&B সার্ভিস ক্রু", location: "অর্চার্ড রোড", salary: "$১,৪০০ – $১,৮০০", sector: "হসপিটালিটি" },
  { title: "প্লাম্বার", location: "উডল্যান্ডস", salary: "$১,৪০০ – $১,৯০০", sector: "এমঅ্যান্ডই" },
];

function JobsPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">কর্মসংস্থান</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">সিঙ্গাপুরে চাকরির সুযোগ</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            আমাদের পার্টনার কোম্পানিগুলোতে চলমান চাকরির সুযোগসমূহ। বেতন সিঙ্গাপুর ডলারে (SGD)।
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {jobs.map((j) => (
            <div key={j.title} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-secondary hover:shadow-md">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{j.sector}</span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{j.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {j.location}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-foreground"><DollarSign className="h-4 w-4 text-secondary" /> {j.salary}</span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="hidden shrink-0 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 sm:inline-block">
                আবেদন
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 text-center text-primary-foreground sm:p-14">
          <h2 className="text-2xl font-bold sm:text-3xl">আপনার পছন্দের চাকরি খুঁজে পাচ্ছেন না?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-primary-foreground/80">আমাদের ডাটাবেসে আরও শতাধিক সুযোগ রয়েছে। যোগাযোগ করুন — আপনার যোগ্যতা অনুযায়ী সেরা প্রস্তাব দেব।</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground">
            যোগাযোগ করুন <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
