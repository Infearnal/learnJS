function init() {

    console.log(typeof String(455) ); //
    console.log(typeof Number('455') ); //
    console.log(typeof Boolean(0)); //

    console.log(typeof (5 * '1')); //

    console.log(typeof (234234 + '')); //быстро в строку
    console.log(typeof (+'123123')); //быстро в число
    console.log(+''); //
    console.log(+true); //
    console.log(+false); //
    console.log(typeof (!!'24')); //быстро в Boolean

    var num = 777;
    console.log(typeof num.toString());

    console.log(parseInt('100.1px')); //парсит число
    console.log(parseFloat('123.14px')); //парсит число с плавающей точкой
}
window.onload = init;