
document.querySelectorAll('.slider').forEach(function (element) {
    var slideSize = element.clientWidth,
        currentPosition = 0,
        buttonLeft = document.querySelector('#left'),
        buttonRight = document.querySelector('#right');

        buttonLeft.onclick = sliderLeft;
        buttonRight.onclick = sliderRight;

        function sliderLeft () {
            currentPosition -= slideSize;
            if (currentPosition >= element.scrollWidth) {
            currentPosition = element.scrollWidth - 2*slideSize;
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
        