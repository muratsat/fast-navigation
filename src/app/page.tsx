import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <Link href="/dashboard" className="text-2xl font-bold underline">
        Dashboard (Prefetch)
      </Link>
      <div className="h-screen">Scroll down</div>

      <Link
        href="/dashboard-no-prefetch"
        className="text-2xl font-bold underline"
        prefetch={false}
      >
        Dashboard (No Prefetch)
      </Link>
    </main>
  );
}
