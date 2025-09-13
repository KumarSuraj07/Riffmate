# Riff-Mate - Guitar Learning Web Application

A full-stack web application for guitarists featuring chords, tabs, scales, and music theory with animated UI.

## Features

- 🎸 **Chords Library** - Interactive chord diagrams and explanations
- 🎼 **Guitar Tabs** - Searchable collection of guitar tablatures
- 🎹 **Scales & Patterns** - Guitar scales with examples
- 📚 **Music Theory** - Circle of fifths and theory lessons
- ✨ **Animated UI** - Framer Motion animations and parallax effects
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend**: React, Framer Motion, React Router
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Styling**: CSS with glassmorphism and parallax effects

## Setup Instructions

### 1. Database Setup
```sql
-- Run the database.sql file to create tables and sample data
mysql -u root -p < database.sql
```

### 2. Backend Setup
```bash
# Install backend dependencies
npm install

# Start the server
npm run dev
```

### 3. Frontend Setup
```bash
# Navigate to client directory
cd client

# Install frontend dependencies
npm install

# Start the React app
npm start
```

### 4. Environment Configuration
Update `.env` file with your database credentials:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=riffmate
PORT=5000
```

## API Endpoints

- `GET /api/chords` - Fetch all chords
- `GET /api/tabs?search=query` - Fetch tabs (with optional search)
- `GET /api/scales` - Fetch all scales
- `GET /api/theory` - Fetch theory articles

## Development

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:3000`
- Frontend proxies API requests to backend

## Project Structure

```
riff-mate/
├── server.js              # Express server
├── database.sql           # Database schema
├── package.json           # Backend dependencies
├── .env                   # Environment variables
└── client/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/         # Page components
    │   ├── App.js         # Main app component
    │   └── index.js       # React entry point
    └── package.json       # Frontend dependencies
```