require(["esri/layers/FeatureLayer"], (FeatureLayer) => {
  const arcgisMap = document.querySelector("arcgis-map");
  arcgisMap.addEventListener("arcgisViewReadyChange", () => {
    const nelsonTracksPopup = {
      title: "Nelson Tracks",
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

    const nelsonTracks = new FeatureLayer({
      url: "https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Walking_Tracks_Dec17/FeatureServer",
      outFields: ["*"],
      popupTemplate: nelsonTracksPopup,
    });
    arcgisMap.map.add(nelsonTracks);

    const hutsPopupContent = async (feature) => {
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

    const nelsonHuts = new FeatureLayer({
      url: "https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Huts/FeatureServer",
      outFields: ["*"],
      popupTemplate: nelsonHutsPopup,
    });
    arcgisMap.map.add(nelsonHuts);
  });
});
