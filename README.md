# HungerCue - Fighting Food Insecurity

A comprehensive web application for HungerCue, a non-profit organization dedicated to fighting food insecurity by connecting local restaurants with homeless shelters.

## About HungerCue

HungerCue redirects surplus food from local restaurants to homeless shelters, ensuring that good food reaches people who need it most rather than going to waste. We organize community events, build partnerships, and track our impact in fighting food insecurity.

### Our Impact

- **$4,000+** in surplus food value redirected
- **15,000+** meals provided to those in need
- **12** restaurant partners
- **8** homeless shelters served
- Multiple successful 5K walks and holiday drives organized
- Honored with letter of appreciation from Ozanam Shelter Director

## Features

### Dashboard
- Real-time impact metrics and statistics
- Recent activity feed
- Quick action buttons
- Milestone celebrations

### Donations Management
- Track food donations from restaurants to shelters
- Record donation details (items, weight, value, date)
- View donation history and statistics
- Calculate total impact (value and weight)

### Restaurant Partners
- Manage restaurant partner directory
- Track donation counts per restaurant
- Store contact information and preferences
- Add new restaurant partners

### Shelter Management
- Maintain shelter partner information
- Track capacity and donations received
- Store director contact details
- Record special requirements and notes

### Events Organization
- Schedule community events (5K walks, food drives, fundraisers)
- Track event participation and funds raised
- Manage volunteer sign-ups
- View upcoming and past events

### About & Mission
- Organization information and mission statement
- Leadership details
- Recognition and achievements
- Ways to get involved

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Custom CSS with CSS variables
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Main dashboard with metrics
│   │   ├── Donations.jsx      # Donation tracking and management
│   │   ├── Restaurants.jsx    # Restaurant partner management
│   │   ├── Shelters.jsx       # Shelter partner management
│   │   ├── Events.jsx         # Event organization and calendar
│   │   └── About.jsx          # About page and mission info
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # Global styles and theme
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## Features in Detail

### Responsive Design
- Mobile-friendly interface
- Adaptive grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

### User Interface
- Clean, modern design
- Intuitive navigation
- Color-coded statistics
- Status badges and indicators
- Interactive forms

### Data Management
- Client-side state management
- Form validation
- Real-time updates
- Persistent data structure

## Color Theme

The application uses a green color scheme representing growth, sustainability, and hope:

- **Primary Green**: `#2c7a4f` - Main brand color
- **Secondary Orange**: `#f97316` - Accent and call-to-action
- **Accent Blue**: `#0ea5e9` - Information and highlights
- **Success**: `#22c55e` - Positive indicators
- **Warning**: `#eab308` - Attention items

## Future Enhancements

- Backend API integration
- User authentication and roles
- Real-time notifications
- Advanced analytics and reporting
- Mobile app version
- Email notifications
- Payment processing for donations
- Volunteer scheduling system
- Inventory management
- Route optimization for pickups

## Contributing

HungerCue welcomes contributions from the community. Whether you're a developer, designer, or passionate about fighting food insecurity, there are ways to help:

- Report bugs or suggest features
- Improve documentation
- Submit pull requests
- Volunteer for events
- Spread awareness

## License

This project is developed for HungerCue, a non-profit organization fighting food insecurity.

## Contact

For more information about HungerCue or to get involved, please visit our website or contact us through the application.

---

**HungerCue** - Fighting Food Insecurity Together
