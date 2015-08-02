function init() {

    //SCOPE (global & local)
    // var str = 'it\'s a string';

    // function initName() {
    //     var myName = 'Roman';
    //     return myName;
    // }
    // initName();

//влияние на glabal variable
    // var inner = function() {
    //     var arr1 = [1,2,3];
    //     for(i = 0; i < arr1.length; i++) { //надо перед i VAR 
    //         console.log(arr1[i]);
    //         console.log('first array');
    //         outer();
    //     }
    // };
    // var outer = function() {
    //     var arr2 = [4,5,6];
    //     for(i = 0; i < arr2.length; i++) {//надо перед i VAR
    //         console.log(arr2[i]);
    //         console.log('second array');
    //     }
    // };
    // inner();

//цепочка областей видимости
    var k = 4;
    var outerScope = function() {
        console.log(k);
        var k = 8;
        console.log(k);
        var innerScope = function() {
            console.log(k);
            var k = 12;
        }
        innerScope();
        console.log(k);
    }
    outerScope();

}
window.onload = init; 