import Link from "next/link";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <Link href="/" className="text-2xl font-bold underline">
        Home
      </Link>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Data />
      </Suspense>
    </main>
  );
}

async function Data() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>Data</div>;
}
