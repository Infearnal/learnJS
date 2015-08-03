(function() {

    var doc = document,
        div = doc.getElementById('test');
        style = div.style;

    // style.color = 'blue';
    // style.backgroundColor = 'yellow';
    // style.border = '1px solid black';
    // style.padding = '20px';
    //!!! не рекомендуется писать style in js
    div.className = 'style';

    // classList don't work in IE
    div.classList.add('css-class'); // add class
    div.classList.remove('style'); // remove class
    // div.classList.toggle('css-class'); // if has class add or delete


    console.log(div);

})();