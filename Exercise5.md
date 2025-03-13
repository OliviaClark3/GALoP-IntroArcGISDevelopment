# Exercise 5 - Add Widgets

By this point, our index.html file is getting a bit crowded. Let's split the HTML, CSS and JavaScript into separate files.

1. Create two new files, one called styles.css and one called index.js

2. Select all the content between the style tags in index.html and cut and paste it into your styles.css file. Remove the style tags from index.html

3. Select all the content between the script tags below the body in index.html and cut and paste it into your index.js. Leave the script tags that link to the JavaScript SDK that we added first

4. Add a link to your stylesheet (styles.css) by adding the following code into the head of your HTML where the styles were previously

```
<link rel="stylesheet" href="styles.css" />
```

5. Add a link to your JavaScript file (index.js) by adding the following code where your previous javascript was

```
<script src="index.js"></script>
```

6. Run your application to check it's all still working

Now that we've cleaned up our code a bit, we're ready to add some widgets

7. Following the steps in this tutorial (https://developers.arcgis.com/javascript/latest/tutorials/query-a-feature-layer-spatial/) add the sketch widget to the application. You will only need to follow the instructions under the Create a Sketch Widget heading

8. Now that we know how to add widgets, try having a go at adding the Legend widget to our application. Here is the documentation page to help you out (https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html)

9. One last widget that might be useful for our map is the Elevation Profile Widget. To use this we'll first need to add an elevation layer to our map. Find the NZ Elevation layer at (https://eaglelabs.maps.arcgis.com/home/item.html?id=2ce4fe7d77024e719f8a04d2155b3fd2) 

10. Using this documentation to help you out (https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ElevationLayer.html), add the NZ Elevation layer to the map

11. Add the Elevation Profile Widget to your application using this documentation (https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ElevationProfile.html)

Bonus task: Go back and see what you can customise about these three widgets we've just added!

Challenge task: Follow the full tutorial at (https://developers.arcgis.com/javascript/latest/tutorials/query-a-feature-layer-spatial/) where we added the sketch widget from to query our feature layer data.
