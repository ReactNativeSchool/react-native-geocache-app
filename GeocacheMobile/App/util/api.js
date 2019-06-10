const data = {
  result: [
    {
      id: 1,
      title: "My Name Is...",
      latitude: 37.3861,
      longitude: 122.0839,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem quam, gravida et venenatis et, venenatis a quam. Donec at erat laoreet, aliquet sapien et, molestie purus. Pellentesque luctus consequat sem. Morbi quis neque nunc. Vestibulum eu libero in diam elementum fringilla non vitae ex. Aenean lacus velit, feugiat vel dui id, suscipit faucibus velit. Nullam ac urna eu risus consequat ullamcorper ac quis velit. Sed ac orci a augue ultrices porta a a est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec bibendum ornare lectus, a feugiat purus placerat non. Morbi non ex mauris. Integer sed ex ultricies, malesuada mi et, feugiat risus. Proin augue arcu, ornare vitae arcu sed, malesuada finibus lorem. In non lacus lectus."
    },
    {
      id: 2,
      title: "Temp",
      latitude: 37.3851,
      longitude: 122.0829
    },
    {
      id: 3,
      title: "Temp 2",
      latitude: 37.3871,
      longitude: 122.0849
    }
  ]
};

export const geoFetch = path => {
  if (path === "/list") {
    return Promise.resolve(data);
  }

  // return fetch()
  return Promise.reject(new Error("API not yet configured for that route."));
};
