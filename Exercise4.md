# Step 4 - Adding Popups

You would have found that clicking on your newly added features does... nothing. 

Unlike in ArcGIS Online where we automatically get popups, attribute tables and all, when we add feature layers in web applications we have to add this ourselves.

This may seem like more work, but it gives us a lot more flexibility to customise how we want our application to appear and function.

1. For each of the layers (huts and walking tracks) go to the service url in your browser
e.g. follow the https://services7.arcgis.com/Nmg3r3okD4I9SIfk/arcgis/rest/services/Huts/FeatureServer url

Here you'll be taken to the ArcGIS REST Services Directory. This will show you information relating to the feature service, which populates the feature layer

2. Under the heading Layers, click on the layer

3. Scroll down to find the Fields heading

This shows us all the attributes of the feature layer. This will be useful to know when we make our popups


Using the instructions at (https://developers.arcgis.com/javascript/latest/tutorials/display-a-pop-up/) for guidance, complete the following tasks

4. For both the huts and walking tracks, set the popup title to be the name

5. For the huts layer, add a sentence to the content of the popup that states the hut category, area, and capacity. Set the attributes category, area, and capacity to be in bold.

6. For the walking tracks layer, add a bar-chart that Shape__Length as it's value field and Lengthtext for the tooltip field. Change the colour of the bar chart to your favourite colour. See (https://developers.arcgis.com/web-map-specification/objects/value/) for help if needed

Challenge task: In the content of the huts add a message that says "The facilities are {facilities attribute}." if there are facilities, but if there are none listed display the message "There are no listed facilities at this hut."
    If you're getting stuck, check out this link for help (https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/popup-template-conditional-title-formatting-js-4/td-p/732313)