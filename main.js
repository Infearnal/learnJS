(function() {

    //СОБЫТИЯ - EVENTS

    // var elem = document.getElementById('box');
    // elem.onclick = function() {
    //     this.style.backgroundColor = 'red';
    // };

    var changeColor = function(e) {
        console.log(e.type); //тип события (click, ...)
        console.log(e.target); //инициатор события (сам елемент)
        console.log(e.currentTarget); //elem на котором висит обработчик
        console.log(e.preventDafault()); //отключает логику по умолчанию
        if(this.id === 'day') {
            document.body.className = 'day';
        } else if (this.id === 'night') {
            document.body.className = 'night';
        }
    };

    var sayHi = function() {
        var currentBodyClass = document.body.className;
        alert('Hallo! Now is ' + currentBodyClass);
    };

    // addEventListener('событие', 'функция', 'true(по умолчанию)');
    // true - capturing(захват) => при сабытии проходит путь в 3 этапа начиная с HTML=>BODY=>и т.д., захват elem а потом всплытие
    // false - bubling(всплытие) => только захват елемента и всплытие;

    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', changeColor, false);
        buttons[i].addEventListener('click', sayHi, false);

        // buttons[i].removeEventLinstener('click', sayHi, false); //удаляет событие(
    }

})();