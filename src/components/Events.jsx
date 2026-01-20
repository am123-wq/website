import { useState } from 'react'

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Spring 5K Walk for Hunger',
      type: '5K Walk',
      date: '2026-04-15',
      time: '9:00 AM',
      location: 'Central Park',
      description: 'Join us for our annual 5K walk to raise awareness and funds for fighting food insecurity. All proceeds go directly to supporting local homeless shelters.',
      participants: 250,
      fundsRaised: 3500,
      status: 'Upcoming',
      volunteers: 15
    },
    {
      id: 2,
      name: 'Summer Food Drive',
      type: 'Food Drive',
      date: '2026-07-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Community Center',
      description: 'Annual summer food collection event. Accepting non-perishable food items, fresh produce, and monetary donations.',
      participants: 0,
      fundsRaised: 0,
      status: 'Planning',
      volunteers: 8
    },
    {
      id: 3,
      name: 'Holiday Food & Toy Drive',
      type: 'Holiday Drive',
      date: '2025-12-15',
      time: '10:00 AM - 6:00 PM',
      location: 'Multiple Locations',
      description: 'Annual holiday drive collecting food, toys, and winter clothing for families in need. Partnered with 5 local shelters.',
      participants: 450,
      fundsRaised: 6200,
      status: 'Completed',
      volunteers: 25
    },
    {
      id: 4,
      name: 'Fall Community 5K',
      type: '5K Walk',
      date: '2025-10-10',
      time: '8:00 AM',
      location: 'Riverside Trail',
      description: 'Community 5K walk/run to raise funds and awareness. Included food stations donated by restaurant partners.',
      participants: 320,
      fundsRaised: 4800,
      status: 'Completed',
      volunteers: 20
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newEvent, setNewEvent] = useState({
    name: '',
    type: '',
    date: '',
    time: '',
    location: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      id: events.length + 1,
      ...newEvent,
      participants: 0,
      fundsRaised: 0,
      status: 'Planning',
      volunteers: 0
    }
    setEvents([event, ...events])
    setNewEvent({
      name: '',
      type: '',
      date: '',
      time: '',
      location: '',
      description: ''
    })
    setShowForm(false)
  }

  const upcomingEvents = events.filter(e => e.status === 'Upcoming' || e.status === 'Planning')
  const completedEvents = events.filter(e => e.status === 'Completed')
  const totalFundsRaised = events.reduce((sum, e) => sum + e.fundsRaised, 0)
  const totalParticipants = events.reduce((sum, e) => sum + e.participants, 0)

  return (
    <div className="events">
      <div className="card">
        <h2>Community Events</h2>
        <p>Organize and manage fundraising events, food drives, and community activities</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card orange">
          <div className="stat-label">Total Events</div>
          <div className="stat-value">{events.length}</div>
          <div className="stat-description">Organized since founding</div>
        </div>

        <div className="stat-card green">
          <div className="stat-label">Funds Raised</div>
          <div className="stat-value">${totalFundsRaised.toLocaleString()}</div>
          <div className="stat-description">From all events</div>
        </div>

        <div className="stat-card blue">
          <div className="stat-label">Total Participants</div>
          <div className="stat-value">{totalParticipants.toLocaleString()}</div>
          <div className="stat-description">Community members engaged</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Upcoming Events</div>
          <div className="stat-value">{upcomingEvents.length}</div>
          <div className="stat-description">Scheduled activities</div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Event Calendar</h3>
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Schedule Event'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Schedule New Event</h4>

            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Event Type</label>
              <select
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                required
              >
                <option value="">Select event type</option>
                <option value="5K Walk">5K Walk/Run</option>
                <option value="Food Drive">Food Drive</option>
                <option value="Holiday Drive">Holiday Drive</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Community Event">Community Event</option>
                <option value="Volunteer Day">Volunteer Day</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                type="text"
                placeholder="e.g., 9:00 AM - 1:00 PM"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Describe the event, its purpose, and what attendees can expect"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Schedule Event</button>
          </form>
        )}

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Upcoming Events</h3>
          {upcomingEvents.length > 0 ? (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {upcomingEvents.map(event => (
                <div key={event.id} style={{ border: '2px solid var(--primary-color)', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#f0fdf4' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ marginBottom: '0.5rem' }}>{event.name}</h3>
                      <span className={`badge ${event.status === 'Upcoming' ? 'badge-success' : 'badge-warning'}`}>
                        {event.status}
                      </span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{event.date}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{event.time}</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Type</div>
                      <div style={{ fontWeight: '500' }}>{event.type}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Location</div>
                      <div style={{ fontWeight: '500' }}>{event.location}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Volunteers</div>
                      <div style={{ fontWeight: '500' }}>{event.volunteers} signed up</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1rem' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>Description</div>
                    <p style={{ margin: 0 }}>{event.description}</p>
                  </div>

                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Register</button>
                    <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Volunteer</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-light)' }}>No upcoming events scheduled</p>
          )}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Past Events</h3>
          {completedEvents.length > 0 ? (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {completedEvents.map(event => (
                <div key={event.id} style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem' }}>{event.name}</h4>
                      <span className="badge badge-info">{event.status}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: '500' }}>{event.date}</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Participants</div>
                      <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>{event.participants}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Funds Raised</div>
                      <div style={{ fontWeight: '500', fontSize: '1.1rem', color: 'var(--success)' }}>${event.fundsRaised.toLocaleString()}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Volunteers</div>
                      <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>{event.volunteers}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    {event.description}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-light)' }}>No past events recorded</p>
          )}
        </div>
      </div>

      <div className="card mt-2">
        <h3>Event Highlights</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li>Organized multiple successful 5K walks raising thousands for homeless shelters</li>
          <li>Annual holiday food drives collecting hundreds of pounds of food and supplies</li>
          <li>Community engagement events bringing together volunteers, donors, and partners</li>
          <li>Educational workshops on food insecurity and sustainable food systems</li>
          <li>Coordination with local businesses and community organizations</li>
        </ul>
      </div>
    </div>
  )
}

export default Events
