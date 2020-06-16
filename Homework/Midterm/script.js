$(document).ready(function(){
    
    $('#bugCarousel').carousel({
        interval: 580
    });
    

    $('#carouselControl').click(function(){
        
        if( $('#carouselControl').hasClass('paused') ){
            $('#bugCarousel').carousel('cycle');
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
