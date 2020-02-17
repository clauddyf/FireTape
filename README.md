# FireTape
FireTape is an application that request the top music tracks in the United States from the external api, Deezer.com, and renders an interactive bubble visualization of those songs.
Each bubble is mova ble and clickable, redirecting the user to the songs page on the Deezer website

## Overview
In order to implement the deezer api in my application, I had to build a backend. Because Deezers api isnt cors enabled, I had to use express so that i can enable cors, make the exteranl api call,
so that I can create a route that I could use on the frontend


Once in the front end, I then saved the URL to a constant `const url`, and then I used the `d3.json` call to create the function that would use that data, and render it into circles.



The trickiest part of using the D3 library is creating the nodes. You have to carefully map through each json object, and assign their properties to a variable, that you will later use to create the bubbles



Once the nodes are created, I then selected the root scalable vector graphic, selctedall circles, appended the nodes inside of these circles, and then manipulated the circle `radius` and `fill` based on 
the nodes properties


Lastly, I had to create a `forceSimulation` function that used `velocityDecay` to force the x and y position of the node based on the users move of the mouse on the svg.
This function was then used in three drag functions, in order to append it to each circle.





## Technologies
* Express
* Javascript
* D3.js
* HTML/5
* CSS
* Google Fonts
* Kazam for Ubuntu screen record
* GiphyCapture for gif production
* Pexels.com(captivating photo)
