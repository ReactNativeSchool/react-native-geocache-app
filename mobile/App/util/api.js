const BASE_URL = "http://localhost:3000";

export const geoFetch = path =>
  fetch(`${BASE_URL}/api${path}`).then(res => res.json());
