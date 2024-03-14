require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Legend",
  "esri/widgets/ElevationProfile",
  "esri/layers/ElevationLayer",
], function (
  esriConfig,
  Map,
  MapView,
  FeatureLayer,
  Sketch,
  GraphicsLayer,
  Legend,
  ElevationProfile,
  ElevationLayer
) {
  esriConfig.apiKey =
    "AAPKa07a324e95e9498bb1de9d702ae6a65fkX6C2FmCKj71uGcHeQne7esbI9_JXyE3836Tyf3JWmiBkvKK518ht8Xg8BwG8Vmq";

  const map = new Map({
    basemap: "arcgis/topographic", // basemap styles service
  });

  const elevationLayer = new ElevationLayer({
    url: "https://services1.arcgisonline.co.nz/arcgis/rest/services/Elevation/New_Zealand_Elevation/ImageServer",
  });
  map.ground.layers.add(elevationLayer);

  const view = new MapView({
    map: map,
    center: [173.244, -41.299], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv", // Div element
  });

  const graphicsLayerSketch = new GraphicsLayer();
  map.add(graphicsLayerSketch);

  const sketch = new Sketch({
    layer: graphicsLayerSketch,
    view: view,
  });
  view.ui.add(sketch, "top-right");

  const legend = new Legend({
    view: view,
  });
  view.ui.add(legend, "bottom-right");

  const elevationProfile = new ElevationProfile({
    view: view,
  });
  view.ui.add(elevationProfile, "bottom-left");

  const hutsPopupContent = (feature) => {
    const defaultString =
      "This is a <b>{Category}</b> located in <b>{Area}</b> with a capacity of <b>{Capacity}</b>.<br/>";
    let facilitiesString;
    if (
      feature.graphic.attributes.Facilities == null ||
      feature.graphic.attributes.Facilities.trim() == ""
    ) {
      facilitiesString = "There are no listed facilities at this hut.";
    } else {
      facilitiesString =
        "The facilities are " + feature.graphic.attributes.Facilities;
    }
    return defaultString + facilitiesString;
  };

  const nelsonHutsPopup = {
    title: "{Name}",
    content: hutsPopupContent,
  };

  const nelsonHutsLayer = new FeatureLayer({
    url: "https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Huts/FeatureServer",
    outFields: ["*"], // get all fields
    popupTemplate: nelsonHutsPopup,
  });

  map.add(nelsonHutsLayer);

  const nelsonTracksPopup = {
    title: "{Name}",
    content: [
      {
        type: "media",
        mediaInfos: [
          {
            type: "bar-chart",
            caption: "",
            value: {
              fields: ["Shape__Length"],
              tooltipField: "Lengthtext",
              colors: [[218, 112, 214, 255]],
            },
          },
        ],
      },
    ],
  };

  const nelsonTracksLayer = new FeatureLayer({
    url: "https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Walking_Tracks_Dec17/FeatureServer",
    outFields: ["*"], // get all fields
    popupTemplate: nelsonTracksPopup,
  });

  map.add(nelsonTracksLayer, 0);
});
