function init() {
    // var statement; //инструкции
    // statement = 5 + 2; //выражения

    //ВЫРАЖЕНИЯ

    //арифметические (основные)
    // 2+3 //5
    // 5-4 //1
    // 2*2 //4
    // 6/2 //3
    // 5%2 //1

    // (2+3)*5 //25

    // = //присваивание

    // ++i; //инкремент (префиксная форма)
    // b++; //постфиксная форма
    // --i; //дикримент
    // var i = 2,
    //     b = 2;
    // console.log(i++);
    // console.log(++b);

    //сравнения 
    // a > b;
    // a < b;
    // a >= b;
    // a <= b;
    // a === b;
    // a !== b;

    //условные
    // if else, ?
    var age = 18;
    // if(age === 18) {
    //     console.log("you are eighteen");
    // } else if(age === 24) {
    //     console.log("you are not eighteen");
    // } else {
    //     console.log("take a beer mather fucker");
    // }

    // (age === 18) ? console.log('you are eighteen') :
    //                 (age === 24) ? console.log('you are not eighteen') :
    //                        console.log("take a beer mather fucker");

    //логические
    // || // или
    // && // и
    // ! // не
    if(age >= 18 && age <= 50) {
        console.log('youre old man');
    } else {
        console.log("youre a young man");
    }


}
window.onload = init;