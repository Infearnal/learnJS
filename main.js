// (function() {
    var doc = document;
    var elem = doc.createElement('p'), //создать узел елемента
        // content = doc.createTextNode('dynamic element'), //создать текстовый узел
        wrap = doc.getElementById('wrap');
        elem.innerHTML = '<strong>dynamic element</strong>';

    //prependChild - ищет родителя елемента
    wrap.parentNode.appendChild(elem); //вставляет елемент
    // wrap.parentNode.insertBefore(elem, wrap); //всавляет('перед какимто елементом', 'какой елемент')
    // wrap.parentNode.replaceChild(elem, wrap);
    elem.setAttribute('data-type', 'data');

    elem.id = 'fock';
    elem.appendChild(content);
    // console.log(elem);

    //кеширование переменных (оптимизация, скорость)



// })();