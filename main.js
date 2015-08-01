function init() {

    var arr = [1, 2, 'str', {}];
    // console.log(arr[2]);

    //add
    arr[399] = 'fock';
    console.log(arr.length);

    //delete
    delete arr[1]; //создает дырку
    arr.splice(1, 1); //delete
    // console.log(arr);
    arr.length; //длина 
    var matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    // console.log(matrix[0][1]);
    var newArr = arr.concat(matrix); //обьеденяет массивы
    arr.join('| '); //преобразует в строку и разделяет чемто
    arr.push('fock'); //доб. последний элемент
    arr.pop('fock'); //delete последний элемент
    arr.unshift('fock'); //доб. первый элемент
    arr.shift('fock'); //delete перавый элемент
    arr.reverse(); //наоборот
    arr.slice(1, 2); //с какого по какой index вырезать
    arr.sort(); //сортирует массив(неправильно числа)

}
window.onload = init;