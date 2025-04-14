// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function() {
  $("#myCarousel").carousel(1); // This will move the carousel to the second item
});

// Enable Carousel Controls
$(".left").click(function() {
  $("#myCarousel").carousel("prev"); // This will go to the previous item
});
