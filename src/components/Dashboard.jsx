import { useState, useEffect } from 'react'

function Dashboard() {
  const [stats, setStats] = useState({
    totalDonations: 4237,
    restaurantsPartners: 12,
    sheltersServed: 8,
    volunteersActive: 45,
    upcomingEvents: 2,
    mealsProvided: 15680
  })

  return (
    <div className="dashboard">
      <div className="card">
        <h2>Welcome to HungerCue</h2>
        <p>
          HungerCue is a non-profit organization fighting food insecurity by redirecting surplus food
          from local restaurants to homeless shelters. Together, we're making a difference in our community.
        </p>
      </div>

      <h2 className="mb-1">Impact Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card orange">
          <div className="stat-label">Total Value Redirected</div>
          <div className="stat-value">${stats.totalDonations.toLocaleString()}</div>
          <div className="stat-description">Surplus food value donated</div>
        </div>

        <div className="stat-card green">
          <div className="stat-label">Meals Provided</div>
          <div className="stat-value">{stats.mealsProvided.toLocaleString()}</div>
          <div className="stat-description">People fed through our efforts</div>
        </div>

        <div className="stat-card blue">
          <div className="stat-label">Restaurant Partners</div>
          <div className="stat-value">{stats.restaurantsPartners}</div>
          <div className="stat-description">Local restaurants donating</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Shelters Served</div>
          <div className="stat-value">{stats.sheltersServed}</div>
          <div className="stat-description">Homeless shelters receiving food</div>
        </div>

        <div className="stat-card orange">
          <div className="stat-label">Active Volunteers</div>
          <div className="stat-value">{stats.volunteersActive}</div>
          <div className="stat-description">Community members helping</div>
        </div>

        <div className="stat-card blue">
          <div className="stat-label">Upcoming Events</div>
          <div className="stat-value">{stats.upcomingEvents}</div>
          <div className="stat-description">Fundraisers & drives scheduled</div>
        </div>
      </div>

      <div className="grid-2 mt-2">
        <div className="card">
          <h3>Recent Activity</h3>
          <ul className="item-list">
            <li>
              <div>
                <strong>Food Donation</strong>
                <br />
                <small>Bella Italia donated 25 lbs of pasta</small>
              </div>
              <span className="badge badge-success">Today</span>
            </li>
            <li>
              <div>
                <strong>New Partnership</strong>
                <br />
                <small>Green Leaf Cafe joined as partner</small>
              </div>
              <span className="badge badge-info">2 days ago</span>
            </li>
            <li>
              <div>
                <strong>Event Completed</strong>
                <br />
                <small>Holiday Food Drive collected 500 lbs</small>
              </div>
              <span className="badge badge-success">1 week ago</span>
            </li>
            <li>
              <div>
                <strong>Recognition</strong>
                <br />
                <small>Letter of appreciation from Ozanam Shelter</small>
              </div>
              <span className="badge badge-warning">2 weeks ago</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn btn-primary">Record New Donation</button>
            <button className="btn btn-secondary">Add Restaurant Partner</button>
            <button className="btn btn-primary">Schedule Event</button>
            <button className="btn btn-secondary">View Reports</button>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
            <strong style={{ color: '#166534' }}>🎉 Milestone Achieved!</strong>
            <p style={{ color: '#166534', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              We've surpassed $4,000 in surplus food redirected to shelters!
            </p>
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <h3>Our Mission</h3>
        <p>
          HungerCue connects local restaurants with homeless shelters to combat food waste and food insecurity.
          We organize community events including 5K walks and holiday food drives, bringing people together
          to make a lasting impact on those experiencing homelessness in our community.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
