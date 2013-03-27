//	***************************************************************************************
//	This general.js file contains general setup information for the jQuery/JavaScript tools
//	***************************************************************************************
$(document).ready(function(){ 

//select

 $(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
     direction: "horizontal",
    animationLoop: false,
    slideshow: false,
    itemWidth: 150,
    itemMargin: 5,
    minItems: 6,
    maxItems: 10
  });
});

 	// mobile menu
  $('#menu').on('click', function(e) {
  //  $(this).find('span.arrow').toggleClass('open');
	$('#navigation').toggle(600);
    return false;
	event.preventDefault();
  });

$("#e1, #e2").select2();

$(".select2-container > a").click(function(event) {
 event.preventDefault();
 });
 

}); 