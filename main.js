function init() {

    //замыкание - closure

    var firstFunc = function() {
        var index = 5;

        return function() {
            return index;
        }
    }

    var secondFunc = function() {
        var index = 15;

        console.log(firstFunc()());
    }

    secondFunc(); //returned 5

}
window.onload = init; 