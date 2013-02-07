$(document).ready(function(){
  $("button.show-hide-comments").click(function(){
    $("#comments").toggle();
		// $("button.show-hide-comments").text("fksdfjlskd");
    var text = $(this).text() == 'Hide comments' ? 'Read comments' : 'Hide comments';
    $(this)
    .text(text)    		  
  });
});	


// $(".email-slide").click(function(){
//     $("#panel").slideToggle("slow");
//     var text = $(this).text() == 'Email' ? 'Close' : 'Email';
//     $(this)
//     .text(text)
//     .toggleClass("active");
// });