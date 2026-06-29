export default function RegisterPage() {
  return (
    <main className="section">
      <div className="card card-body">
        <p className="eyebrow">Verified profile</p>
        <h1>Create profile</h1>
        <p>
          Profiles will store client contact details and a verification status
          before bookings can be paid.
        </p>
        <form className="form-grid">
          <label className="field">
            Name and surname
            <input />
          </label>
          <label className="field">
            Email
            <input type="email" />
          </label>
          <label className="field">
            Phone
            <input />
          </label>
          <label className="field">
            Password
            <input type="password" />
          </label>
          <div className="form-actions">
            <button type="button">Create account</button>
          </div>
        </form>
      </div>
    </main>
  );
}
