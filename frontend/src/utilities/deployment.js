// The backend's base URL and the Google Maps key come from the environment;
// see frontend/.env.example. The original Render backend no longer exists.
export const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3005"
export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
