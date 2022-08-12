document.addEventListener('DOMContentLoaded', function () {

    const navSlide = () => {
        //controls the sliding of the navbar on the right on click
        // $('.burger').click(() => {
        //     var burger=$('#dropdownNavBar');
        //     if (burger.style.width === "0%") {
        //         burger.css({
        //             width: '35%',
        //             transition: '0.5s'
        //         });
        //         burger.addClass('active');
        //     } else {
        //         burger.css({
        //             width: '0%',
        //             transition: '0.5s'
        //         });
        //         burger.removeClass('active');
        //     }
        // });

        const burger = document.querySelector('.burger');
        burger.addEventListener('click', () => {

            if (document.getElementById("dropdownNavBar").style.width === "0%") {
                document.getElementById("dropdownNavBar").style.width = "35%";
                document.getElementById("dropdownNavBar").style.transition = "0.5s";
                burger.classList.add('active');
            } else {
                document.getElementById("dropdownNavBar").style.width = "0%";
                document.getElementById("dropdownNavBar").style.transition = "0.5s";
                burger.classList.remove('active');
                
            }



        });
    }
    //This function resets the navbar's width after the button pushing when resizing up from low width
    const resetterFunc = () => {
        $(window).resize(function () {
            if ($(this).width() >= 1195) {
                document.getElementById("dropdownNavBar").style.width = "100%";
                document.getElementById("dropdownNavBar").style.transition = "0s";
            } else {
                document.getElementById("dropdownNavBar").style.width = "0%";
                document.getElementById("dropdownNavBar").style.transition = "0s";
            }
        });
    }
    //Combining all functions to execute in 1 function for clarity and to keep things tidy.
    const execFunc = () => {
        resetterFunc();
        navSlide();
    }
    execFunc();


});
