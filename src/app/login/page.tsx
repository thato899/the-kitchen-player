import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="section">
      <div className="card card-body">
        <p className="eyebrow">Client access</p>
        <h1>Login</h1>
        <p>Supabase Auth will power verified client profiles in the next milestone.</p>
        <form className="form-grid">
          <label className="field full">
            Email
            <input type="email" />
          </label>
          <label className="field full">
            Password
            <input type="password" />
          </label>
          <div className="form-actions">
            <button type="button">Login</button>
            <Link className="button secondary" href="/register">
              Create profile
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
