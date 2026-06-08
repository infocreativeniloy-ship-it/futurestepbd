import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const navItems = [
  { to: "/", label: "হোম" },
  { to: "/about", label: "আমাদের সম্পর্কে" },
  { to: "/courses", label: "কোর্সসমূহ" },
  { to: "/jobs", label: "চাকরির সুযোগ" },
  { to: "/gallery", label: "গ্যালারি" },
  { to: "/contact", label: "যোগাযোগ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Plane className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-primary">FutureStep</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Singapore Training
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              activeProps={{ className: "text-primary bg-muted" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-sm transition-transform hover:-translate-y-0.5 lg:inline-block"
        >
          এখনই আবেদন করুন
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-muted"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-secondary px-3 py-2.5 text-center text-base font-semibold text-secondary-foreground"
            >
              এখনই আবেদন করুন
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
