function drive (element) {
    element.classList.add("tires-whell__rotate");    
};

function drive2 (element) {
    element.classList.add("tires-images__drive"); 
};

function coord () {
    document.querySelectorAll(".tires-images").forEach(function (images) {
        var coord = images.getBoundingClientRect()
        if (coord.y < document.documentElement.clientHeight) {
            drive2(images);
            document.querySelectorAll(".tires-wheel").forEach(function (wheel) {
                var coord2 = wheel.getBoundingClientRect()
                if (coord2.y < document.documentElement.clientHeight) {
                    drive(wheel);
                }
            })    
        }
    })
}

window.onscroll =  coord;


