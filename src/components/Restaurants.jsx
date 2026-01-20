import { useState } from 'react'

function Restaurants() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Bella Italia', contact: 'Marco Rossi', phone: '(555) 123-4567', email: 'marco@bellaitalia.com', cuisine: 'Italian', donations: 24, joined: '2024-08-15', status: 'Active' },
    { id: 2, name: 'Sunrise Diner', contact: 'Sarah Johnson', phone: '(555) 234-5678', email: 'sarah@sunrisediner.com', cuisine: 'American', donations: 18, joined: '2024-09-01', status: 'Active' },
    { id: 3, name: 'Green Leaf Cafe', contact: 'Emily Green', phone: '(555) 345-6789', email: 'emily@greenleaf.com', cuisine: 'Vegetarian', donations: 15, joined: '2025-01-10', status: 'Active' },
    { id: 4, name: 'Pizza Paradise', contact: 'Tony Milano', phone: '(555) 456-7890', email: 'tony@pizzaparadise.com', cuisine: 'Pizza', donations: 22, joined: '2024-07-20', status: 'Active' },
    { id: 5, name: 'Thai Spice', contact: 'Kim Patel', phone: '(555) 567-8901', email: 'kim@thaispice.com', cuisine: 'Thai', donations: 19, joined: '2024-10-05', status: 'Active' }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    contact: '',
    phone: '',
    email: '',
    cuisine: '',
    address: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const restaurant = {
      id: restaurants.length + 1,
      ...newRestaurant,
      donations: 0,
      joined: new Date().toISOString().split('T')[0],
      status: 'Active'
    }
    setRestaurants([...restaurants, restaurant])
    setNewRestaurant({
      name: '',
      contact: '',
      phone: '',
      email: '',
      cuisine: '',
      address: ''
    })
    setShowForm(false)
  }

  const totalDonations = restaurants.reduce((sum, r) => sum + r.donations, 0)

  return (
    <div className="restaurants">
      <div className="card">
        <h2>Restaurant Partners</h2>
        <p>Manage relationships with restaurant partners who donate surplus food</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-label">Total Partners</div>
          <div className="stat-value">{restaurants.length}</div>
          <div className="stat-description">Active restaurant partners</div>
        </div>

        <div className="stat-card green">
          <div className="stat-label">Total Donations</div>
          <div className="stat-value">{totalDonations}</div>
          <div className="stat-description">Donations from all partners</div>
        </div>

        <div className="stat-card orange">
          <div className="stat-label">Average Donations</div>
          <div className="stat-value">{Math.round(totalDonations / restaurants.length)}</div>
          <div className="stat-description">Per restaurant partner</div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>Partner Directory</h3>
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Add Partner'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Add New Restaurant Partner</h4>

            <div className="form-group">
              <label>Restaurant Name</label>
              <input
                type="text"
                value={newRestaurant.name}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Person</label>
              <input
                type="text"
                value={newRestaurant.contact}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, contact: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={newRestaurant.phone}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, phone: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={newRestaurant.email}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Cuisine Type</label>
              <input
                type="text"
                placeholder="e.g., Italian, American, Asian"
                value={newRestaurant.cuisine}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                value={newRestaurant.address}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })}
                placeholder="Street address, city, state, zip"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Partner</button>
          </form>
        )}

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Restaurant</th>
                <th>Contact</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Cuisine</th>
                <th>Donations</th>
                <th>Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map(restaurant => (
                <tr key={restaurant.id}>
                  <td><strong>{restaurant.name}</strong></td>
                  <td>{restaurant.contact}</td>
                  <td>{restaurant.phone}</td>
                  <td>{restaurant.email}</td>
                  <td>{restaurant.cuisine}</td>
                  <td>{restaurant.donations}</td>
                  <td>{restaurant.joined}</td>
                  <td>
                    <span className="badge badge-success">{restaurant.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mt-2">
        <h3>Partnership Benefits</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
          <li>Tax deduction for food donations</li>
          <li>Reduce food waste and environmental impact</li>
          <li>Support local homeless shelters</li>
          <li>Positive community recognition</li>
          <li>Simple pickup coordination</li>
          <li>Recognition on HungerCue website and materials</li>
        </ul>
      </div>
    </div>
  )
}

export default Restaurants
