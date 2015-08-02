function init() {

    //LOOPS
    //for
    // for(/*выражение*/ инициализация; тест; инкримент(декримент)) {
    //     //тело цикла
    // }

    // var arr = [1, 2, 3, 4],
    //     sum = 0;
    // for(var i = 0; i < arr.length; i++) {
    //     sum = sum + arr[i];
    // }
    // console.log(sum);

    //for in - цикл по обьекту 
    // var obj = {
    //     prop: 'one',
    //     name: 'Roman'
    // }
    // var prop;
    // for(prop in obj) {
    //     if(obj.hasOwnProperty(prop)) { // обязательная проверка
    //         console.log(prop + ' : ' + obj[prop]);
    //     }
    // }

    //while
    // var k = 0;
    // while(k < 10) {
    //     console.log(k++);
    // }

    //do while - 1 раз но обязательно выведется
    var h = 0;
    do {
        console.log(h++);
    } while (h < 10);

}
window.onload = init;