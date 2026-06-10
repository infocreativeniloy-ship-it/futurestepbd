import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import trainingImg from "@/assets/training.jpg";
import successImg from "@/assets/success.jpg";
import heroImg from "@/assets/hero-singapore.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "গ্যালারি ও সাফল্যের গল্প — FutureStep" },
      { name: "description", content: "FutureStep এর প্রশিক্ষণ মুহূর্ত, সফল প্রার্থী ও কার্যক্রমের ছবি ও টেস্টিমোনিয়াল।" },
      { property: "og:title", content: "গ্যালারি — FutureStep" },
      { property: "og:description", content: "আমাদের সফল প্রার্থীদের গল্প।" },
    ],
  }),
  component: GalleryPage,
});

const testimonials = [
  { name: "মোঃ রফিকুল ইসলাম", role: "ওয়েল্ডার, সিঙ্গাপুর", quote: "FutureStep এর প্রশিক্ষণে আজ আমি সিঙ্গাপুরে ভালো বেতনে কাজ করছি।" },
  { name: "আব্দুল করিম", role: "ইলেকট্রিশিয়ান, জুরং", quote: "প্রতিটি ধাপে ওদের সহযোগিতা পেয়েছি — ভিসা থেকে এয়ারপোর্ট পর্যন্ত।" },
  { name: "শাহীন আহমেদ", role: "হোটেল স্টাফ, মেরিনা বে", quote: "সততা ও স্বচ্ছ প্রক্রিয়ার জন্য FutureStep এর ওপর সম্পূর্ণ ভরসা।" },
];

const images = [
  { src: trainingImg, alt: "প্রশিক্ষণ কেন্দ্র" },
  { src: successImg, alt: "সফল প্রার্থী" },
  { src: heroImg, alt: "সিঙ্গাপুর" },
  { src: trainingImg, alt: "ওয়ার্কশপ" },
  { src: heroImg, alt: "মেরিনা বে" },
  { src: successImg, alt: "সাফল্য" },
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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img src={img.src} alt={img.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
