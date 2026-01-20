import { useState } from 'react'

function Shelters() {
  const [shelters, setShelters] = useState([
    {
      id: 1,
      name: 'Ozanam Shelter',
      director: 'Robert Martinez',
      phone: '(555) 111-2222',
      email: 'director@ozanam.org',
      capacity: 120,
      address: '123 Hope Street, City, State 12345',
      donationsReceived: 45,
      status: 'Active',
      notes: 'Primary shelter partner. Received letter of appreciation for our service.'
    },
    {
      id: 2,
      name: 'Hope Haven',
      director: 'Linda Thompson',
      phone: '(555) 222-3333',
      email: 'info@hopehaven.org',
      capacity: 80,
      address: '456 Mercy Avenue, City, State 12345',
      donationsReceived: 32,
      status: 'Active',
      notes: 'Family shelter. Prefers breakfast items and fresh produce.'
    },
    {
      id: 3,
      name: 'Safe Harbor',
      director: 'Michael Chen',
      phone: '(555) 333-4444',
      email: 'contact@safeharbor.org',
      capacity: 60,
      address: '789 Community Lane, City, State 12345',
      donationsReceived: 28,
      status: 'Active',
      notes: 'Emergency shelter. Limited storage, prefers non-perishables.'
    },
    {
      id: 4,
      name: 'Community Care',
      director: 'Angela Davis',
      phone: '(555) 444-5555',
      email: 'admin@communitycare.org',
      capacity: 100,
      address: '321 Shelter Road, City, State 12345',
      donationsReceived: 38,
      status: 'Active',
      notes: 'Veteran-focused shelter. Full kitchen facilities available.'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newShelter, setNewShelter] = useState({
    name: '',
    director: '',
    phone: '',
    email: '',
    capacity: '',
    address: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const shelter = {
      id: shelters.length + 1,
      ...newShelter,
      capacity: Number(newShelter.capacity),
      donationsReceived: 0,
      status: 'Active'
    }
    setShelters([...shelters, shelter])
    setNewShelter({
      name: '',
      director: '',
      phone: '',
      email: '',
      capacity: '',
      address: '',
      notes: ''
    })
    setShowForm(false)
  }

  const totalCapacity = shelters.reduce((sum, s) => sum + s.capacity, 0)
  const totalDonations = shelters.reduce((sum, s) => sum + s.donationsReceived, 0)

  return (
    <div className="shelters">
      <div className="card">
        <h2>Homeless Shelters</h2>
        <p>Manage relationships with shelters receiving food donations</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-label">Shelters Served</div>
          <div className="stat-value">{shelters.length}</div>
          <div className="stat-description">Active shelter partners</div>
        </div>

        <div className="stat-card green">
          <div className="stat-label">Total Capacity</div>
          <div className="stat-value">{totalCapacity}</div>
          <div className="stat-description">People that can be served</div>
        </div>

        <div className="stat-card orange">
          <div className="stat-label">Donations Delivered</div>
          <div className="stat-value">{totalDonations}</div>
          <div className="stat-description">Total deliveries made</div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Shelter Directory</h3>
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Add Shelter'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Add New Shelter Partner</h4>

            <div className="form-group">
              <label>Shelter Name</label>
              <input
                type="text"
                value={newShelter.name}
                onChange={(e) => setNewShelter({ ...newShelter, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Director/Contact Person</label>
              <input
                type="text"
                value={newShelter.director}
                onChange={(e) => setNewShelter({ ...newShelter, director: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={newShelter.phone}
                onChange={(e) => setNewShelter({ ...newShelter, phone: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={newShelter.email}
                onChange={(e) => setNewShelter({ ...newShelter, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Capacity (Number of People)</label>
              <input
                type="number"
                value={newShelter.capacity}
                onChange={(e) => setNewShelter({ ...newShelter, capacity: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                value={newShelter.address}
                onChange={(e) => setNewShelter({ ...newShelter, address: e.target.value })}
                placeholder="Street address, city, state, zip"
                required
              />
            </div>

            <div className="form-group">
              <label>Notes</label>
              <textarea
                value={newShelter.notes}
                onChange={(e) => setNewShelter({ ...newShelter, notes: e.target.value })}
                placeholder="Special requirements, preferences, or other information"
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Shelter</button>
          </form>
        )}

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {shelters.map(shelter => (
            <div key={shelter.id} style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>{shelter.name}</h3>
                  <span className="badge badge-success">{shelter.status}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Capacity</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{shelter.capacity}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Director</div>
                  <div style={{ fontWeight: '500' }}>{shelter.director}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Phone</div>
                  <div style={{ fontWeight: '500' }}>{shelter.phone}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Email</div>
                  <div style={{ fontWeight: '500' }}>{shelter.email}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Donations Received</div>
                  <div style={{ fontWeight: '500' }}>{shelter.donationsReceived}</div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>Address</div>
                <div>{shelter.address}</div>
              </div>

              {shelter.notes && (
                <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '6px', borderLeft: '3px solid var(--accent-color)' }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>Notes</div>
                  <div style={{ fontSize: '0.9rem' }}>{shelter.notes}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-2">
        <h3>Recognition</h3>
        <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #eab308' }}>
          <strong style={{ color: '#854d0e' }}>🏆 Letter of Appreciation</strong>
          <p style={{ color: '#854d0e', marginTop: '0.5rem' }}>
            HungerCue has been honored with a letter of appreciation from the Ozanam Shelter Director
            for our dedication to fighting food insecurity and supporting homeless community members.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Shelters
