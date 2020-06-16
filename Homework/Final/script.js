$(document).ready(function(){
    
    $('#candyCarousel').carousel({
        interval: 580
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