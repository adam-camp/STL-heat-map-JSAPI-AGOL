require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/widgets/Legend"], (
      Map,
      CSVLayer,
      MapView,
      Legend
    ) => {
  const url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";

      // Paste the url into a browser's address bar to download and view the attributes


  const template = {
   title: "Crime committed at {ILEADSStreet}."
};
  
  const renderer = {
          type: "heatmap",
  colorStops: [
    { ratio: 0, color: "rgba(255, 255, 255, 0)" },
    { ratio: 0.1, color: "rgba(255, 225, 0, 1)" },
    { ratio: 0.2, color: "rgba(255, 200, 0, 1)" },
    { ratio: 0.3, color: "rgba(255, 175, 0, 1)" },
    { ratio: 0.4, color: "rgba(255, 150, 0, 1)" },
    { ratio: 0.5, color: "rgba(255, 125, 0, 1)" },
    { ratio: 0.6, color: "rgba(255, 100, 0, 1)" },
    { ratio: 0.7, color: "rgba(255, 75, 0, 1)" },
    { ratio: 0.8, color: "rgba(255, 50, 0, 1)" },
    { ratio: 0.9, color: "rgba(255, 25, 0, 1)" },
    { ratio: 1, color: "rgba(255, 0, 0, 1)" }
  ],
  minPixelIntensity: 0,
  maxPixelIntensity: 5000
};

     const layer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Heatmap",
        copyright: "St. Louis Police Department",
		latitudeField:"Latitude",
        longitudeField:"Longitude",
		popupTemplate: template,
		renderer: renderer
});

      const map = new Map({
        basemap: "osm",
        layers: [layer]
      });

      const view = new MapView({
        container: "viewDiv",
        center: [-90.18, 38.672],
        zoom: 11,
        map: map
      });
        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
    });
