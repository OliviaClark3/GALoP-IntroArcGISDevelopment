# Exercise 6 - You're on your own

Congrats on making it through all the structured exercises. You'll be getting the hang of this by now.

Here some tasks for you to try without me providing the help guides, you can find the documentation on your own.

 - Add the Expand Widget to each of your over widgets so they don't have to all block the screen

 - Add a header to your website above the map with the title of your application using a div. Make it so that there is no scrollbar on your page by changing the styles (look into css styling, specifically flex)

 - Take a look through the JavaScript SDK documentation to find another widget you want to add to your map, and add it in

These next couple of tasks might require you to do some googling outside of the JavaScript SDK website. See if you can figure it out

 - Add a button (HTML element) to your header with the text "Add Huts". Give you button an id so you can reference it

 - Add some JavaScript so that only when you click on the button, the Huts layer gets added to the map.
      - First get your button to just output "click" in the console. You can find the console on the web browser by clicking CTRL+SHIFT+I. Then add a console.log("") to output there when the button is clicked
  
 - Once that button is working, add another to remove the huts layer from the map

Let's make these buttons a bit prettier with some Calcite Components
Calcite Components are Esri's versions of you standard HTML components (plus more) to give your web application a cleaner finish, and the look and feel of other ArcGIS products

 - Install the Calcite Components package and add it to your code (https://developers.arcgis.com/calcite-design-system/get-started/)

 - On the site above, find the components documentation, locate the button component

 - Using the button documentation, replace your current HTML button components with the Calcite Button
