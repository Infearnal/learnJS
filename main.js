function init() {

    //литерал обьект
    var obj = {
        //ключ: значение
        name: 'Roman',
        func: function() {
            console.log(this.name);
        }
    };
    // console.log(obj.name); //точечная нотация
    // console.log(obj['name']); //нотация квадратных скобок

    // console.log(obj.lastName || "Chumychov"); //задать несущ. свойства

    //присвоение
    obj.old = 29;
    obj.name = 'R';
    // console.log(obj);

    //обьекты передаются по ссылкам они не копируются!!!!

    //удаление свойств
    // delete obj.old;
    // console.log(obj);
    // obj.func();
    var MYAPP = {
        
    };
}
window.onload = init;