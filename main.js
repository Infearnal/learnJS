(function() {

    var buttons = document.getElementsByTagName('button');
    var changeColor = function(e) {
        eventsObj.preventDefault(e);

        var elem = eventsObj.getTarget(e),
            colorData = elem.getAttribute('data-color');

        if(colorData) {
            if(e.type === 'click') {
                document.body.className = '';
            } else if(e.type === 'mouseover') {
                document.body.className = colorData;
            }
        }
    };
    eventsObj.addEvent(document, 'mouseover', changeColor);
    eventsObj.addEvent(document, 'click', changeColor);

})();