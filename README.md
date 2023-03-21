# 100 Week Challenge Background:
The overal goal of this challenge is to create a simple website design every week, for a 100 weeks!
Each week I will increase the complexity of the design, by week 100 the final design will include:
## Front-end:
1. Javascript/TypeScript
2. CSS
3. HTML
4. React
5. JQuery
6. + whatever else I learn!

## Back-end:
1. Expressjs
2. C#
4.+ whatever else I learn!

# Week One Challenge:
During week one I reviewed basic HTML and CSS to transtion pages with SmoothScroll:
```
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #fff;
  line-height: 1.6;
  height: 100vh;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
  /*CSS Smooth Scroll */
  overflow-y:scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  
  section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
}
  
  ```
  
  Completed a lecture video to create the same affect in JavaScript, this method works on any web browser. Where pure CSS can create edge cases in Explorer:
  ```
/* Option 2 - jQuery Smooth Scrolling */
 $('.navbar a').on('click', function (e) {
     console.log(this.hash)

 })

/*option 3 - SmoothScroll Scriot*/
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
speed: 500
});
```
# Areas I Fell Short:
1. Failed to properly implement nodemon during session
2. Pushed an empty text file to git (app.js)
3. Messy code

# Areas to Improve for next week:
1. More JavaScript
2. Less guidance from a youtube video
3. Build confidence in nodemon and git

