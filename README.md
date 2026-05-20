# Country Website

A web application that displays information about countries with a backend API and frontend interface.

## Project Structure

```
country-website/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .gitignore
└── README.md
```

## Backend

The backend is a Node.js server that provides API endpoints for country data.

### Requirements
- Node.js (v14 or higher)
- npm

### Installation

```bash
cd backend
npm install
```

### Running the Server

```bash
cd backend
npm start
# or
node server.js
```

The server will start and listen on the configured port (default: 3000).

### Dependencies
- `wikipedia` - For fetching country information from Wikipedia

## Frontend

The frontend is a vanilla JavaScript web application that displays country information.

### Files
- `index.html` - Main HTML structure
- `script.js` - JavaScript logic for fetching and displaying data
- `style.css` - Styling

### Running

Simply open `frontend/index.html` in your web browser or serve it using a local server:

```bash
# Using Python
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd country-website
   ```

2. **Start the backend**
   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Open the frontend**
   - Open `frontend/index.html` in your browser
   - Or serve the frontend folder on a local server

## API Endpoints

Check `backend/server.js` for available API endpoints and their usage.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
