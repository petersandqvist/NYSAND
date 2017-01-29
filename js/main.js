//JAVASCRIPT CODE

/*MENU BAR*/

document.getElementById('hamburgler').addEventListener('click', checkNav);
    window.addEventListener("keyup", function(e) {
   if (e.keyCode == 27) closeNav();
 }, false);

    function checkNav() {
   if (document.body.classList.contains('hamburgler-active')) {
     closeNav();
   }
 
   else {
     openNav();
   }
 }


    function closeNav() {
   document.body.classList.remove('hamburgler-active');
 }

    function openNav() {
   document.body.classList.add('hamburgler-active');
 }

    
/*SMOOTH SCROLLING*/

 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
         closeNav();
        return false;
      }
    }
  });
});



