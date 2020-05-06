//DOM = Document modeling ...
document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    var sliderImg = document.getElementsByClassName("slider-img__list"),
        btn = document.querySelectorAll(".slider-control__btn"),
        len = btn.length;

    for (var i = 0; i < len; i++) {
        btn[i].addEventListener("click", function () {
            setInterval(time);
            for (var j = 0; j < len; j++) {
                btn[j].classList.remove("active");
            }
            this.classList.add("active");

            // Cach 1
            /*for (var tmp = 0; tmp < len; tmp++) {
                if (btn[tmp].classList[1] == 'active') {
                    count = tmp;
                    sliderImg[count].classList.add("active");
                    break;
                }
            }*/
            // Cach 2
            /* var temp = this;
            var count = 0;
            while (temp.previousElementSibling != null) {
                temp = temp.previousElementSibling;
                count++;
            }
            */
            // Cach 3
            var posN = this.getAttribute("data-slide-to"); // vi tri hien tai
            sliderImg[posN].classList.add("now");

        });
    }
    // Tu dong chay
    var time = setInterval(function () {
        autoRun();
    }, 5000);
    // hàm autoRun
    function autoRun() {
        var pNow = 0;
        // tim vi tri hien tai cua slide
        for (var i = 0; i < len; i++) {
            if (btn[i].classList[1] == "active") {
                pNow = btn[i].getAttribute("data-slide-to");
                break;
            }
        }
        if (pNow == 0) {
            sliderImg[len - 1].classList.remove("losing");
        }
        else {
            sliderImg[pNow - 1].classList.remove("losing");
        }
        btn[pNow].classList.remove("active");
        sliderImg[pNow].className = sliderImg[pNow].className.replace("now", "losing");
        // kiem tra xem co phai vi tri cuoi cung ko.
        if (pNow == len - 1) pNow = 0;
        else pNow++;
        // chuyen sang slide ke tiep
        sliderImg[pNow].classList.add("now");
        btn[pNow].classList.add("active");
    }
}, false)