var pirelli = document.querySelector(".tires-wheel"),
    image = document.querySelector(".tires-images"),
    text = document.querySelector(".tires-text");

    pirelli.onmouseover = drive;
    text.onmouseover = drive;

    function drive () {
        image.classList.remove("tires-images__driveRevers");
        pirelli.classList.remove("tires-whell__rotateRevers");
        image.classList.add("tires-images__drive");
        pirelli.classList.add("tires-whell__rotate");
    }

    pirelli.onmouseout = driveRevers;
    text.onmouseout = driveRevers;

    function driveRevers () {
        image.classList.remove("tires-images__drive");
        pirelli.classList.remove("tires-whell__rotate");
        image.classList.add("tires-images__driveRevers");
        pirelli.classList.add("tires-whell__rotateRevers");
    }

   