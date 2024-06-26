/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZmxvcmlhbm1lYWxpbmciLCJhIjoiY2x4a2drazEyMDFwejJqc2gwZGFjOGx0eSJ9.YjFiRDWOmuxXHdWEVAhWrA";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/florianmealing/clxkgoih500dq01r2c1f5c6gc",
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
