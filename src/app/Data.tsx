export async function Data({ waitSeconds }: { waitSeconds?: number }) {
  const waitMs = (waitSeconds ?? 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, waitMs));

  return <div>Data (waited {waitSeconds} seconds)</div>;
}
