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
├── .github/
│   └── workflows/
│       └── deploy.yml
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

## CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment.

### Workflow Details

- **Workflow File**: `.github/workflows/deploy.yml`
- **Trigger**: Automatically runs on push events to the repository
- **Purpose**: Automates testing, building, and deployment processes

The CI/CD pipeline ensures code quality and enables seamless deployment of updates to your application.

### Project Workflow Diagram

```mermaid
graph TB
    subgraph Development["Development"]
        A["Developer"] -->|Push Code| B["GitHub Repository"]
    end
    
    subgraph CI["CI/CD Pipeline - GitHub Actions"]
        C["Trigger Deploy Workflow"] -->|On Push| D["Build Backend"]
        D -->|npm install| E["Install Dependencies"]
        E -->|Run Tests| F["Validate Code"]
        F -->|Build Success| G["Build Frontend"]
        G -->|Bundle Assets| H["Prepare Deployment"]
    end
    
    subgraph Production["Production"]
        H -->|Deploy| I["Backend Server<br/>Node.js API"]
        H -->|Deploy| J["Frontend Application<br/>Static Files"]
        K["Wikipedia API"] -.->|Fetch Data| I
        I -->|API Endpoints| J
        J -->|Display Countries| L["User Browser"]
    end
    
    B -->|Webhook| C
    style A fill:#e1f5ff
    style L fill:#c8e6c9
    style C fill:#fff3e0
    style I fill:#f3e5f5
    style J fill:#f3e5f5
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
