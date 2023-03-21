// Option 2 - jQuery Smooth Scrolling
// $('.navbar a').on('click', function (e) {
//     console.log(this.hash)

// })

/*option 3 - SmoothScroll Scriot*/
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
speed: 500
});