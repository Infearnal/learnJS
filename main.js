(function() {

    var elem = document.getElementsByTagName('p'), //Node list (array)
        classElem = document.getElementsByClassName('paragraph'),
        idElem = document.getElementById('four'),
        elemSelector = document.querySelector('p'), //view first elem
        elemSelectors = document.querySelectorAll('p'), //all elem - getElementsByTagName работает быстрее
        elemInDiv = document.querySelectorAll('div p'),
        idElemSelector = document.querySelector('#four');

        // console.log(idElemSelector);
        // console.log(idElem);
        // console.log(classElem);
    // console.log(elem);
    for(var i = 0; i < elem.length; i++) {
        // console.log(elem[i].tagName); //работа с елементами
        // console.log(elem[i].parentNode);
        // console.log(elem[i].previousSibling.previousSibling); //предыдущий родственник (2 раза так как считает пробельные ноды)
        // console.log(elem[i].nextSibling.nextSibling);
        // console.log(elem[i].nodeName); //работа с любыми узлами
        // console.log(elem[i].nodeType); 
    }

    // console.log(document.querySelector('div').childNodes);
    // console.log(document.querySelector('div').children);
    // console.log(document.querySelector('div').lastChild);
    // console.log(document.querySelector('div').firstChild);
    // console.log(document.querySelector('div').innerHTML);

})();