# Exercise 1 - Initial Setup

1.  Install Visual Studio Code (https://code.visualstudio.com/). We will be using this to write our code
2.  Create a folder on your computer to store the code.
3.  Once VS Code is installed, open VS Code, go File > Open Folder, and open the folder we just created
4.  Create a new file called index.html

    a. Inside this file, add the following code

        ```
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1, maximum-scale=1, user-scalable=no"
                />
                <title>My First Website!</title>

                <style>
                    html,
                    body,
                    #viewDiv {
                    padding: 0;
                    margin: 0;
                    height: 100%;
                    width: 100%;
                    }
                </style>

                <link rel="stylesheet" href="https://js.arcgis.com/4.29/esri/themes/light/main.css" />
                <script src="https://js.arcgis.com/4.29/"></script>

            </head>
            <body>
                <div id="viewDiv">My Website</div>
            </body>
        </html>
        ```

5. Save your work. Open your index.html file in a web browser, and you should see the words "My Website" on the screen
