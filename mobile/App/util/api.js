const BASE_URL = "http://localhost:3000";

export const geoFetch = (path, options = {}) =>
  fetch(`${BASE_URL}/api${path}`, options).then(res => res.json());
