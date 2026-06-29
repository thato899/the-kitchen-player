export default function AdminPage() {
  return (
    <main className="section">
      <div className="section-head">
        <div>
          <p className="eyebrow">Admin dashboard</p>
          <h1>Operations overview.</h1>
        </div>
        <p>
          This dashboard is designed to become a protected admin platform for
          gallery uploads, payment tracking, expenses, and booking follow-up.
        </p>
      </div>

      <div className="dashboard">
        <section className="card card-body">
          <div className="stat-row">
            <div className="stat">
              <span>Revenue tracked</span>
              <h2>R0</h2>
            </div>
            <div className="stat">
              <span>Expenses</span>
              <h2>R0</h2>
            </div>
            <div className="stat">
              <span>Pending bookings</span>
              <h2>0</h2>
            </div>
          </div>
          <h2 style={{ marginTop: 28 }}>Payment activity</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Demo data pending</td>
                <td>Awaiting integration</td>
                <td>R0</td>
              </tr>
            </tbody>
          </table>
        </section>

        <aside className="card card-body">
          <h2>Gallery album</h2>
          <p>
            Upload images, add an event story, and optionally attach a display
            price. Supabase Storage is the planned image backend.
          </p>
          <button type="button">Add album</button>
        </aside>
      </div>
    </main>
  );
}
