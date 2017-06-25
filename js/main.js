'use strict';


$(document).ready(function () {

    //zmienne
    var slider = $('#slider');
    var slideShow = $('#slider .slide-show');
    var slideCount = slideShow.children().length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    //ustawienie szerokosci kontenera
    slideShow.css('width', slideCount * 100 + '%');
    
    //ustawienie marginesow i szerokosci dla pojedynczych slidow
    slideShow.find('.single-slide').each(function(index){
        var leftPercent = (slideWidth * index) + '%';
        $(this).css('margin-left', leftPercent);
        $(this).css('width', slideWidth + '%');
         });
    
    //wywolanie funkcji slide na click
    $('.prev-slide').click(function(){
       slide(slideIndex - 1); 
    });
    
    $('.next-slide').click(function(){
        slide(slideIndex + 1);
    });

    //definicja funkcji slide
    function slide(newSlideIndex){
       //sprawdzamy czy pierwszy czy ostatni slide i nie robimy nic
        if(newSlideIndex <= 0 || newSlideIndex >= slideCount){
            return;
        }
        
        //elementy slide caption i przypisz do zmiennej
        var slideCaption = slider.find('slider-caption').eq(newSlideIndex);
        
        //ukrywanie napisu
        
    }

});