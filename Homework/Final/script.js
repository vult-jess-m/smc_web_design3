$(document).ready(function(){
    
    $('#candyCarousel').carousel({
        interval: 3000
    });
    

    $('#carouselControl').click(function(){
        
        if( $('#carouselControl').hasClass('paused') ){
            $('#candyCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        }
        else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

$("#newsettler").modal('show');
    


});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


//Shopping Cart

var currentItems = 0;
$(document).ready(function () {
    $(".accordion-heading").click(function () {
        if ($(".accordion-body").is(':visible')) {
            /* check the condition accordion-body is visible or not */
            $(".accordion-body").slideUp(200); /*if content is visible then close accordion-body with specific time duration */
            $(".plusminus").text('+') /* add plus sign */
        } else {
            $(this).next(".accordion-body").slideDown(200);
            /*if content not visible then 
                                                                                                                      show the accordion-body */
            $(this).children(".plusminus").text('-'); /* add minus sign */
        }
    });
    $(".cart").click(function () {
        currentItems++;
        $(".cart-number").text(currentItems);
    });
})