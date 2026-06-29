const eventTypes = ["Wedding", "Birthday", "Corporate", "Funeral", "Private dinner", "Community event"];

export default function BookPage() {
  return (
    <main className="section">
      <div className="section-head">
        <div>
          <p className="eyebrow">Verified client booking</p>
          <h1>Plan your event.</h1>
        </div>
        <p>
          In production, this form will require a verified account before
          creating a booking and payment link. The API is already separated for
          that secure flow.
        </p>
      </div>

      <form className="card card-body" action="/api/bookings" method="post">
        <div className="form-grid">
          <label className="field">
            Event type
            <select name="eventType" required>
              <option value="">Choose one</option>
              {eventTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="field">
            Audience
            <input name="audience" placeholder="Family, executives, students" required />
          </label>
          <label className="field">
            Name and surname
            <input name="name" required />
          </label>
          <label className="field">
            Event size or guest count
            <input name="eventSize" placeholder="80 guests" required />
          </label>
          <label className="field">
            Location
            <input name="location" required />
          </label>
          <label className="field">
            Theme
            <input name="theme" placeholder="Elegant black tie, traditional, casual" />
          </label>
          <label className="field full">
            Cooking menu
            <textarea name="cookingMenu" placeholder="Main meals, sides, desserts, dietary needs" required />
          </label>
          <label className="field full">
            Equipment
            <textarea name="equipment" placeholder="Tables, chairs, chafing dishes, mobile cooking station" />
          </label>
          <label className="field">
            Venue size
            <input name="venueSize" placeholder="Small hall, outdoor marquee, 300m2" required />
          </label>
          <label className="field">
            Organizer email
            <input name="organizerEmail" type="email" required />
          </label>
          <label className="field">
            Organizer phone
            <input name="organizerPhone" required />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">Create booking request</button>
        </div>
      </form>
    </main>
  );
}
