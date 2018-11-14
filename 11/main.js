
document.querySelectorAll('.slider').forEach(function (element) {
    var slideSize = element.clientWidth;
        currentPosition = 0;
        buttonLeft = document.getElementById('left');
        buttonRight = document.getElementById('right');

        buttonLeft.onclick = sliderLeft;
        buttonRight.onclick = sliderRight;
        
        function sliderLeft () {
            currentPosition -= slideSize;
            if (currentPosition >= 2540) {
            currentPosition = 1920
            }
            element.scroll({
                left: currentPosition,
                behavior: 'smooth'
              });
        };

        function sliderRight () {
            currentPosition += slideSize;
            if (currentPosition < 0 ) {
                currentPosition = slideSize
            }
            element.scroll({
                left: currentPosition,
                behavior: 'smooth'
            });
        }
});
        