# Step 3 - Add a feature layer

We now have a map! Try interacting with it. You'll find all interaction controls are the same as with ArcGIS Online.

Currently our map looks a bit boring, and we're not even in New Zealand! Let's fix that.

1. We want our maps default location to be New Zealand. Change the center of the map to be [173.244, -41.299]
2. Find the Nelson-Tasman Walking Tracks feature layer at (https://eaglelabs.maps.arcgis.com/home/item.html?id=5c662b77626b4a50bdb83940c850c34f)
3. Find the Nelson Trails Huts feature layer at (https://eaglelabs.maps.arcgis.com/home/item.html?id=ba05bf96c42f437799e324591ecfafbf)
4. Using the instructions at (https://developers.arcgis.com/javascript/latest/tutorials/add-a-feature-layer/) for guidance, add the two Nelson feature layers to your map application. Be sure to give the feature layer variables suitable names

Hint: You may notice that the URL's used in the tutorial are a bit different than the ones I have provided. That's because in order to add the feature layer to your map, we need the feature service url. This can be found at the bottom of the feature layer item page

5. Once you've added your layers, reload the page to see them on your map

What happens if you click on a feature?