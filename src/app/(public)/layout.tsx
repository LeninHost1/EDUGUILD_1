import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#eef2ff_55%,_#e2e8f0_100%)] text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            EDUGUILD
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="/about" className="hover:text-slate-900">About</Link>
            <Link href="/features" className="hover:text-slate-900">Features</Link>
            <Link href="/benefits" className="hover:text-slate-900">Benefits</Link>
            <Link href="/contact" className="hover:text-slate-900">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>EDUGUILD - Academic resource collaboration for universities.</p>
          <p>Questions? Contact academic support at admissions@eduguild.edu.</p>
        </div>
      </footer>
    </div>
  );
}
