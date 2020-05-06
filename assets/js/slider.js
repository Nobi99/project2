//DOM = Document modeling ...
document.addEventListener("DOMContentLoaded", function () {
    "use strict"

    // Variable declaration
    var sliderImg = document.getElementsByClassName("slider-img__list"),
        btn = document.querySelectorAll(".slider-control__btn"),
        len = btn.length,
        los;
    // Add Event Click
    for (var i = 0; i < len; i++) {
        btn[i].addEventListener("click", function () {
            clearInterval(time);
            // tim vi tri slide hien tai
            for (var j = 0; j < len; j++) {
                if (btn[j].classList[1] == "active") {
                    los = btn[j].getAttribute("data-slide-to");
                }
                // xoa cac class cu di de tranh bug
                sliderImg[j].classList.remove("now");
                sliderImg[j].classList.remove("losing");

            }
            btn[los].classList.remove("active");
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
            // Cach 3: using "data-slide-to"
            // vi tri hien tai
            var posN = this.getAttribute("data-slide-to");
            sliderImg[los].classList.add("losing");
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
            }
            sliderImg[i].classList.remove("now");
            sliderImg[i].classList.remove("losing");
        }
        if (pNow == 0) {
            sliderImg[len - 1].classList.remove("losing");
        }
        else {
            sliderImg[pNow - 1].classList.remove("losing");
        }
        btn[pNow].classList.remove("active");
        //sliderImg[pNow].className = sliderImg[pNow].className.replace("now", "losing");
        sliderImg[pNow].classList.add("losing")
        // kiem tra xem co phai vi tri cuoi cung ko.
        if (pNow == len - 1) pNow = 0;
        else pNow++;
        // chuyen sang slide ke tiep
        sliderImg[pNow].classList.add("now");
        btn[pNow].classList.add("active");
    }
}, false)