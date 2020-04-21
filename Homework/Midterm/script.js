$(document).ready(function(){
    $("#myModal").modal('show');
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

    $('#modalLauncher').click(function(){
        $('#exampleModal').modal({
            backdrop: false
        });
    });


});