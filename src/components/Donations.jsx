import { useState } from 'react'

function Donations() {
  const [donations, setDonations] = useState([
    { id: 1, restaurant: 'Bella Italia', items: 'Pasta, Bread, Salad', weight: '25 lbs', value: 180, shelter: 'Ozanam Shelter', date: '2026-01-20', status: 'Delivered' },
    { id: 2, restaurant: 'Sunrise Diner', items: 'Breakfast items, Fruits', weight: '15 lbs', value: 120, shelter: 'Hope Haven', date: '2026-01-19', status: 'Delivered' },
    { id: 3, restaurant: 'Green Leaf Cafe', items: 'Sandwiches, Soups', weight: '20 lbs', value: 150, shelter: 'Safe Harbor', date: '2026-01-18', status: 'Delivered' },
    { id: 4, restaurant: 'Pizza Paradise', items: 'Pizza, Garlic bread', weight: '30 lbs', value: 200, shelter: 'Community Care', date: '2026-01-17', status: 'Delivered' },
    { id: 5, restaurant: 'Thai Spice', items: 'Rice dishes, Curry', weight: '22 lbs', value: 165, shelter: 'Ozanam Shelter', date: '2026-01-16', status: 'Delivered' }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newDonation, setNewDonation] = useState({
    restaurant: '',
    items: '',
    weight: '',
    value: '',
    shelter: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const donation = {
      id: donations.length + 1,
      ...newDonation,
      status: 'Pending'
    }
    setDonations([donation, ...donations])
    setNewDonation({
      restaurant: '',
      items: '',
      weight: '',
      value: '',
      shelter: '',
      date: new Date().toISOString().split('T')[0]
    })
    setShowForm(false)
  }

  const totalValue = donations.reduce((sum, d) => sum + Number(d.value), 0)
  const totalWeight = donations.reduce((sum, d) => sum + Number(d.weight.split(' ')[0]), 0)

  return (
    <div className="donations">
      <div className="card">
        <h2>Food Donations</h2>
        <p>Track and manage all food donations from restaurants to shelters</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card orange">
          <div className="stat-label">Total Donations</div>
          <div className="stat-value">{donations.length}</div>
          <div className="stat-description">Recorded donations</div>
        </div>

        <div className="stat-card green">
          <div className="stat-label">Total Value</div>
          <div className="stat-value">${totalValue.toLocaleString()}</div>
          <div className="stat-description">Worth of food donated</div>
        </div>

        <div className="stat-card blue">
          <div className="stat-label">Total Weight</div>
          <div className="stat-value">{totalWeight} lbs</div>
          <div className="stat-description">Food redirected</div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Donation Records</h3>
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ New Donation'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Record New Donation</h4>

            <div className="form-group">
              <label>Restaurant Name</label>
              <input
                type="text"
                value={newDonation.restaurant}
                onChange={(e) => setNewDonation({ ...newDonation, restaurant: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Items Donated</label>
              <input
                type="text"
                placeholder="e.g., Pasta, Bread, Salad"
                value={newDonation.items}
                onChange={(e) => setNewDonation({ ...newDonation, items: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Weight</label>
              <input
                type="text"
                placeholder="e.g., 25 lbs"
                value={newDonation.weight}
                onChange={(e) => setNewDonation({ ...newDonation, weight: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Estimated Value ($)</label>
              <input
                type="number"
                value={newDonation.value}
                onChange={(e) => setNewDonation({ ...newDonation, value: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Receiving Shelter</label>
              <select
                value={newDonation.shelter}
                onChange={(e) => setNewDonation({ ...newDonation, shelter: e.target.value })}
                required
              >
                <option value="">Select a shelter</option>
                <option value="Ozanam Shelter">Ozanam Shelter</option>
                <option value="Hope Haven">Hope Haven</option>
                <option value="Safe Harbor">Safe Harbor</option>
                <option value="Community Care">Community Care</option>
                <option value="St. Mary's Center">St. Mary's Center</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={newDonation.date}
                onChange={(e) => setNewDonation({ ...newDonation, date: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Record Donation</button>
          </form>
        )}

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Restaurant</th>
                <th>Items</th>
                <th>Weight</th>
                <th>Value</th>
                <th>Shelter</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(donation => (
                <tr key={donation.id}>
                  <td>{donation.date}</td>
                  <td><strong>{donation.restaurant}</strong></td>
                  <td>{donation.items}</td>
                  <td>{donation.weight}</td>
                  <td>${donation.value}</td>
                  <td>{donation.shelter}</td>
                  <td>
                    <span className={`badge ${donation.status === 'Delivered' ? 'badge-success' : 'badge-warning'}`}>
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Donations
