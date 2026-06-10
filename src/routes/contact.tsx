import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "যোগাযোগ — FutureStep" },
      { name: "description", content: "FutureStep এর সাথে যোগাযোগ করুন। আমাদের অফিসে আসুন বা ফোন/ইমেইলে পরামর্শ নিন।" },
      { property: "og:title", content: "যোগাযোগ — FutureStep" },
      { property: "og:description", content: "ঠিকানা, ফোন, ইমেইল ও আবেদন ফর্ম।" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">যোগাযোগ</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">যেকোনো প্রশ্ন বা পরামর্শের জন্য আমরা সবসময় প্রস্তুত। বিনামূল্যে কাউন্সেলিং পেতে আজই যোগাযোগ করুন।</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">যোগাযোগের তথ্য</h2>
          <div className="mt-8 space-y-5">
            {[
              { icon: MapPin, label: "অফিসের ঠিকানা", value: "Vill: Kurgaon, Post: Mirzanagar-1344, Ward No: 03, Thana: Ashulia, Savar, Dhaka" },
              { icon: Phone, label: "ফোন", value: "+880 1711-752685, +880 1764-118114, +880 1888-254380" },
              { icon: Mail, label: "ইমেইল", value: "catexpressbd@gmail.com" },
              { icon: Clock, label: "অফিস সময়", value: "শনি – বৃহস্পতি, সকাল ১০টা – সন্ধ্যা ৬টা" },
            ].map((it) => (
              <div key={it.label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                  <div className="mt-0.5 font-medium text-foreground">{it.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-foreground">আবেদন ফর্ম</h2>
          <p className="mt-1 text-sm text-muted-foreground">তথ্য দিন, আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।</p>

          {submitted ? (
            <div className="mt-6 rounded-lg bg-secondary/15 p-6 text-center">
              <p className="font-semibold text-primary">ধন্যবাদ! আপনার আবেদন গ্রহণ করা হয়েছে।</p>
              <p className="mt-1 text-sm text-muted-foreground">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              {[
                { name: "name", label: "পূর্ণ নাম", type: "text", placeholder: "আপনার নাম" },
                { name: "phone", label: "মোবাইল নম্বর", type: "tel", placeholder: "+৮৮০..." },
                { name: "email", label: "ইমেইল", type: "email", placeholder: "you@example.com" },
                { name: "course", label: "আগ্রহী কোর্স", type: "text", placeholder: "যেমন: ওয়েল্ডিং" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-foreground">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground">বার্তা</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="আপনার প্রশ্ন বা বার্তা..."
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" /> আবেদন পাঠান
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
