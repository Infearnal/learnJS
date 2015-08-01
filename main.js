function init() {

    var blabla,
        obj = {},
        arr = [1, 3 , 4];

    //Boolean
    //все true кроме пяти исключений
    console.log( Boolean(NaN));
    console.log( Boolean(''));
    console.log( Boolean(0));
    console.log( Boolean(undefined));
    console.log( Boolean(null));

    //null

    //undefined - что то не обьявили или не передали
    console.log(blabla);
    console.log(obj.name);
    console.log(arr[8]);
}
window.onload = init;