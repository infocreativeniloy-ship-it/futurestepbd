import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-singapore.jpg";
import weldingImg from "@/assets/course-welding.jpg";
import forkliftImg from "@/assets/course-forklift.jpg";
import safetyImg from "@/assets/course-safety.jpg";
import riggerImg from "@/assets/course-rigger.jpg";
import siteSupImg from "@/assets/course-site-supervisor.jpg";
import generalWorkerImg from "@/assets/course-general-worker.jpg";
import liftingImg from "@/assets/course-lifting.jpg";
import visaImg from "@/assets/course-visa.jpg";
import electricalImg from "@/assets/course-electrical.jpg";
import constructionSgImg from "@/assets/course-construction-sg.jpg";
import departureImg from "@/assets/course-departure.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "গ্যালারি ও সাফল্যের গল্প | FutureStep" },
      { name: "description", content: "FutureStep এর মাধ্যমে সিঙ্গাপুরে কর্মরত প্রার্থীদের ছবি ও সাফল্যের গল্প — কনস্ট্রাকশন, ওয়েল্ডিং, ইলেকট্রিক্যাল সহ বিভিন্ন কাজে।" },
      { property: "og:title", content: "গ্যালারি ও সাফল্যের গল্প | FutureStep" },
      { property: "og:description", content: "ভিসা পাওয়া ও সিঙ্গাপুরে কাজ করা প্রার্থীদের মুহূর্ত।" },
      { property: "og:url", content: "https://cozy-kind-orb.lovable.app/gallery" },
      { name: "twitter:title", content: "গ্যালারি ও সাফল্যের গল্প | FutureStep" },
      { name: "twitter:description", content: "ভিসা পাওয়া ও সিঙ্গাপুরে কাজ করা প্রার্থীদের মুহূর্ত।" },
    ],
    links: [
      { rel: "canonical", href: "https://cozy-kind-orb.lovable.app/gallery" },
    ],
  }),
  component: GalleryPage,
});

const testimonials = [
  { name: "মোঃ রফিকুল ইসলাম", role: "ওয়েল্ডার, সিঙ্গাপুর", quote: "FutureStep এর সহযোগিতায় আজ আমি সিঙ্গাপুরে ভালো বেতনে কাজ করছি।" },
  { name: "আব্দুল করিম", role: "ইলেকট্রিশিয়ান, জুরং", quote: "প্রতিটি ধাপে ওদের সহযোগিতা পেয়েছি — ভিসা থেকে এয়ারপোর্ট পর্যন্ত।" },
  { name: "শাহীন আহমেদ", role: "কনস্ট্রাকশন ওয়ার্কার, মেরিনা বে", quote: "সততা ও স্বচ্ছ প্রক্রিয়ার জন্য FutureStep এর ওপর সম্পূর্ণ ভরসা।" },
];

const images = [
  { src: visaImg, alt: "ভিসা অনুমোদন পাওয়া প্রার্থীরা" },
  { src: departureImg, alt: "সিঙ্গাপুরের পথে যাত্রা" },
  { src: constructionSgImg, alt: "সিঙ্গাপুরে কনস্ট্রাকশনে কর্মরত" },
  { src: weldingImg, alt: "ওয়েল্ডিং কাজে কর্মরত" },
  { src: electricalImg, alt: "ইলেকট্রিক্যাল কাজে কর্মরত" },
  { src: forkliftImg, alt: "ফর্কলিফট অপারেটর" },
  { src: riggerImg, alt: "রিগার ও সিগন্যাল ম্যান" },
  { src: liftingImg, alt: "লিফটিং সুপারভাইজার" },
  { src: safetyImg, alt: "সেফটি সুপারভাইজার" },
  { src: siteSupImg, alt: "সাইট সুপারভাইজার" },
  { src: generalWorkerImg, alt: "জেনারেল ওয়ার্কার" },
  { src: heroImg, alt: "সিঙ্গাপুর" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">গ্যালারি</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">আমাদের মুহূর্তগুলো</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">প্রশিক্ষণ, সাফল্য ও সিঙ্গাপুরে যাত্রার কিছু মুহূর্ত।</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-sm">
              <img src={img.src} alt={img.alt} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">{img.alt}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">সফল প্রার্থীদের মতামত</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">তাঁদের কথায়</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="text-foreground/90">“{t.quote}”</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
