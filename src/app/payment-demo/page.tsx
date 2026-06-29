import Link from "next/link";

export default async function PaymentDemoPage({
  searchParams
}: {
  searchParams: Promise<{ externalTransactionID?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="section">
      <div className="card card-body">
        <p className="eyebrow">Demo payment mode</p>
        <h1>Payment link ready.</h1>
        <p>
          iKhokha credentials are not configured yet, so the app created a safe
          demo link for reference {params.externalTransactionID ?? "unknown"}.
        </p>
        <Link className="button" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
