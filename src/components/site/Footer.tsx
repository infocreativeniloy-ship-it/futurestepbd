import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone, Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Plane className="h-5 w-5" />
            </span>
            <span className="text-xl font-bold">FutureStep</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            সিঙ্গাপুরে দক্ষ জনশক্তি প্রেরণে বিশ্বস্ত প্রতিষ্ঠান। মান সম্মত প্রশিক্ষণ ও নিশ্চিত কর্মসংস্থান।
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">দ্রুত লিংক</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary">আমাদের সম্পর্কে</Link></li>
            <li><Link to="/courses" className="hover:text-secondary">কোর্সসমূহ</Link></li>
            <li><Link to="/jobs" className="hover:text-secondary">চাকরির সুযোগ</Link></li>
            <li><Link to="/gallery" className="hover:text-secondary">গ্যালারি</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">যোগাযোগ</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> ঢাকা, বাংলাদেশ</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> +৮৮০ ১৭০০-০০০০০০</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> info@futurestep.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">সামাজিক মাধ্যম</h4>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">
            অফিস সময়: শনি–বৃহস্পতি, সকাল ১০টা – সন্ধ্যা ৬টা
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} FutureStep. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>BMET লাইসেন্সকৃত রিক্রুটিং এজেন্সি</p>
        </div>
      </div>
    </footer>
  );
}
