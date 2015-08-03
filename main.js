(function() {

    //FUNCTIONS TIME
    //setTimeout
    // var startTimer = function() {
    //     console.log('function startTimer gogogogo))');
    // };
    // var timer = setTimeout(startTimer, 3000);
    // console.log('fock');

    // //clearTimeout
    // clearTimeout(timer);

    // ANIMATION
    var delay = 10,
        i = 0,
        animCircle = function(pixels) {
            var elem = document.getElementById('circle'),
                bottom = elem.offsetTop;
                console.log(bottom);
            if((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
                clearInterval(timer);
                timer = setIntervar(function() {
                    animCircle(pixels * -1)
                }, delay);
            }
            elem.style.top = bottom + pixels + 'px';
            i++;
        };
    var timer = setInterval(function() {
        animCircle(20);
    }, delay);

})();