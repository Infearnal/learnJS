(function() {

    var buttons = document.getElementsByTagName('button');
    var changeColor = function(e) {
        eventsObj.preventDefault(e);
        var elem = eventsObj.getTarget(e);
        
        if(elem.id === 'day') {
            document.body.className = 'day';
        } else if(elem.id === 'night') {
            document.body.className = 'night';
        }
    };
    for(var i = 0; i < buttons.length; i++) {
        eventsObj.addEvent(buttons[i], 'click', changeColor);
    }

})();