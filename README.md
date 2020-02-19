# FireTape
FireTape is an application that request the top music tracks in the United States from the external api, Deezer.com, and renders an interactive bubble visualization of those songs.
Each bubble is mova ble and clickable, redirecting the user to the songs page on the Deezer website
![](https://github.com/clauddyf/FireTape/blob/master/public/Screenshot%20from%202020-02-17%2015-32-18.png)


## Getting Started: How to play locally
If you do not have git and/or node.js installed, or you are unsure,please click on both links and install the git and node package
  * Git download url: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  * Node download url: https://nodejs.org/en/download/
1. Create folder in Desktop

 `cd Desktop`
 
 `mkdir Firetape`
 
 `cd FireTape`

2. Clone the project or download zip

  `git clone https://github.com/clauddyf/FireTape.git`
  
3. Get into project folder

 `cd FireTape`
  
3. Install dependencies

 `npm install`
 
 `cd api`
 
 `npm install`
 
 
4. Run the server

 `npm start`
 
5. Copy `index.html` file-path in `dist` folder into browser window

## Overview
In order to implement the deezer api in my application, I had to build a backend. Because Deezers api isnt cors enabled, I had to use express so that i can enable cors, make the exteranl api call,
so that I can create a route that I could use on the frontend


![](https://github.com/clauddyf/FireTape/blob/master/public/Screenshot%20from%202020-02-17%2015-02-44.png)


Once in the front end, I then saved the URL to a constant `const url`, and then I used the `d3.json` call to create the function that would use that data, and render it into circles.

![](https://github.com/clauddyf/FireTape/blob/master/public/Screenshot%20from%202020-02-17%2015-03-06.png)

The trickiest part of using the D3 library is creating the nodes. You have to carefully map through each json object, and assign their properties to a variable, that you will later use to create the bubbles.

![](https://github.com/clauddyf/FireTape/blob/master/public/Screenshot%20from%202020-02-17%2015-03-24.png)


Once the nodes are created, I then selected the root scalable vector graphic, selctedall circles, appended the nodes inside of these circles, and then manipulated the circle `radius` and `fill` based on 
the nodes properties

![](https://github.com/clauddyf/FireTape/blob/master/public/Screenshot%20from%202020-02-17%2015-03-42.png)

Lastly, I had to create a `forceSimulation` function that used `velocityDecay` to force the x and y position of the node based on the users move of the mouse on the svg.
This function was then used in three drag functions, in order to append it to each circle.

![](https://github.com/clauddyf/FireTape/blob/master/public/Screenshot%20from%202020-02-17%2015-03-56.png)




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

## Future Implementation
* Correct the `mouseover` and `mousemove` functions
* shape the size of the bubbles using some other numeric value provided y the external api
* Have users be able to sort by genre
