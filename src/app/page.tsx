import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <Link href="/dashboard" className="text-2xl font-bold underline">
        Dashboard
      </Link>
    </main>
  );
}
