const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.production.com"
    : "http://localhost:3000";

export default apiUrl;
