function About() {
  return (
    <div className="about">
      <div className="card">
        <h2>About HungerCue</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          HungerCue is a non-profit organization dedicated to fighting food insecurity by connecting
          local restaurants with homeless shelters. We believe that no one should go hungry when there
          is surplus food available in our community.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To combat food waste and food insecurity by creating sustainable connections between
            restaurants with surplus food and homeless shelters serving those in need. We work to
            ensure that good food reaches people who need it most, rather than going to waste.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            A community where no one experiences hunger and where surplus food is efficiently
            redirected to those who need it. We envision a network of compassionate businesses
            and organizations working together to end food insecurity.
          </p>
        </div>
      </div>

      <div className="card">
        <h3>What We Do</h3>
        <div className="grid-2" style={{ marginTop: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid var(--success)' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>🍽️ Food Redistribution</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              We coordinate with local restaurants to collect surplus food and deliver it to
              homeless shelters, ensuring nothing goes to waste while feeding those in need.
            </p>
          </div>

          <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid var(--warning)' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>🏃 Community Events</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              We organize 5K walks, holiday drives, and fundraising events that bring the
              community together while raising awareness and funds for our cause.
            </p>
          </div>

          <div style={{ padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>🤝 Partnership Building</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              We create lasting partnerships with restaurants, shelters, and community
              organizations to build a sustainable food redistribution network.
            </p>
          </div>

          <div style={{ padding: '1rem', backgroundColor: '#fce7f3', borderRadius: '8px', borderLeft: '4px solid var(--secondary-color)' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>📊 Impact Tracking</h4>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              We measure and report our impact, tracking donations, meals provided, and
              the difference we're making in fighting food insecurity.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Our Impact</h3>
        <div className="stats-grid" style={{ marginTop: '1rem' }}>
          <div className="stat-card orange">
            <div className="stat-value">$4,000+</div>
            <div className="stat-description">Surplus food value redirected</div>
          </div>

          <div className="stat-card green">
            <div className="stat-value">15,000+</div>
            <div className="stat-description">Meals provided to those in need</div>
          </div>

          <div className="stat-card blue">
            <div className="stat-value">12</div>
            <div className="stat-description">Restaurant partners</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-description">Shelters served</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Leadership</h3>
        <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', marginTop: '1rem' }}>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Founder and President</h4>
          <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
            Leading HungerCue's mission to fight food insecurity through innovative partnerships
            and community engagement. Under this leadership, HungerCue has:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li>Redirected over $4,000 in surplus food from local restaurants to shelters</li>
            <li>Organized successful 5K walks and holiday drives</li>
            <li>Built partnerships with 12 restaurants and 8 homeless shelters</li>
            <li>Received letter of appreciation from Ozanam Shelter Director</li>
            <li>Created a sustainable model for food redistribution in the community</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>Recognition</h3>
        <div style={{ padding: '1.5rem', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid var(--warning)', marginTop: '1rem' }}>
          <h4 style={{ color: '#854d0e', marginBottom: '0.5rem' }}>🏆 Letter of Appreciation</h4>
          <p style={{ color: '#854d0e', margin: 0 }}>
            HungerCue has been honored with a letter of appreciation from the Ozanam Shelter Director,
            recognizing our dedication and impact in fighting food insecurity and supporting homeless
            community members.
          </p>
        </div>
      </div>

      <div className="card">
        <h3>Get Involved</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          There are many ways you can support HungerCue's mission to fight food insecurity:
        </p>
        <div className="grid-2">
          <div>
            <h4>For Restaurants</h4>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
              <li>Become a partner and donate surplus food</li>
              <li>Receive tax deductions for donations</li>
              <li>Reduce food waste</li>
              <li>Support your local community</li>
            </ul>
          </div>
          <div>
            <h4>For Individuals</h4>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
              <li>Volunteer at events and food pickups</li>
              <li>Participate in our 5K walks</li>
              <li>Donate to support operations</li>
              <li>Spread awareness about food insecurity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <h3 style={{ color: 'white' }}>Join Us in Fighting Food Insecurity</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Together, we can ensure that no one in our community goes hungry.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary">Become a Partner</button>
          <button className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>Volunteer Now</button>
        </div>
      </div>
    </div>
  )
}

export default About
