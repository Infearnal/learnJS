function init() {

    //function
    // function имя(параметр) {
    //     тело функции(инструкции);
    // }
    // имя(аргумент);
    function func(a, b) {
        return a + b;
    }
    // console.log(func(2, 5));

    //2 вида функций function declaration & function expration
    //function declaration
    function name() {
        //body;
    }
    //function expration
    var name = function() {
        //body;
    }

    //разница
    // function func1() {
    //     function funcExample() {
    //         return 'one';
    //     }

    //     return funcExample();

    //     function funcExample() {
    //         return 'two';
    //     }
    // }

    // function func2() {
    //     var funcExample = function() {
    //         return 'one';
    //     }

    //     return funcExample();

    //     var funcExample = function() {
    //         return 'two';
    //     }
    // }
    // console.log(func1());
    // console.log(func2());

    //функции обратного вызова 'callback'
    // var func = function(callback) {
    //     var name = 'Roman';
    //     return callback(name);
    // }
    // console.log(func(function(p) {
    //     return 'hello ' + p;
    // }));

    //возвращеник функции
    // var func1 = function() {
    //     return function() {
    //         // console.log('hello world!');
    //     };
    // };
    // func1()();

    // ;(function(){ //анонимная самовызывающаяся функция
    //     // console.log('anonimus)!');
    // })();

    // var prop = "fock";
    // var module = (function(pro){ //патерн модуля
    //     // console.log('anonimus)!');
    //     // console.log(pro);
    // })(prop);

    var funcArg = function() { //обьект косящий под массив
        var i,
            sum = 0;
        for(i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
        // console.log(arguments); //есть свойство length
    };
    console.log(funcArg(1,2,3,4));
}
window.onload = init;