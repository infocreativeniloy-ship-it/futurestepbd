import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FutureStep — সিঙ্গাপুর ট্রেনিং সেন্টার" },
      { name: "description", content: "FutureStep — বাংলাদেশ থেকে সিঙ্গাপুরে দক্ষ জনশক্তি প্রেরণে বিশ্বস্ত প্রতিষ্ঠান। মান সম্মত প্রশিক্ষণ ও নিশ্চিত কর্মসংস্থান।" },
      { name: "author", content: "FutureStep" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "FutureStep — সিঙ্গাপুর ট্রেনিং সেন্টার" },
      { name: "twitter:title", content: "FutureStep — সিঙ্গাপুর ট্রেনিং সেন্টার" },
      { property: "og:description", content: "FutureStep — বাংলাদেশ থেকে সিঙ্গাপুরে দক্ষ জনশক্তি প্রেরণে বিশ্বস্ত প্রতিষ্ঠান। মান সম্মত প্রশিক্ষণ ও নিশ্চিত কর্মসংস্থান।" },
      { name: "twitter:description", content: "FutureStep — বাংলাদেশ থেকে সিঙ্গাপুরে দক্ষ জনশক্তি প্রেরণে বিশ্বস্ত প্রতিষ্ঠান। মান সম্মত প্রশিক্ষণ ও নিশ্চিত কর্মসংস্থান।" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8255e1cf-15fa-40b3-abe8-af5a9d01a447/id-preview-c2a6c813--42b520e2-0b90-406e-bbcc-14b8b813378f.lovable.app-1780903735191.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8255e1cf-15fa-40b3-abe8-af5a9d01a447/id-preview-c2a6c813--42b520e2-0b90-406e-bbcc-14b8b813378f.lovable.app-1780903735191.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/__l5e/assets-v1/cecf8992-f35c-4943-b915-2eb90fba59e4/favicon.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/__l5e/assets-v1/45c6f11f-2950-4b20-a86d-c743c9daddc4/apple-touch-icon.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
