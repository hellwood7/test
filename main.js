//LESSON 20 --
// https://learn.javascript.ru - сайт, который тебе поможет

let box = document.getElementById('box'), // Для того, чтобы присвоить переменной данные из HTML (id),, Если значений много - формируется массив
    btn = document.getElementsByTagName('button'), // Для того, чтобы присвоить переменной данные из tag-name (Выбираются все эллеменеты с указанным значением)
    circle = document.getElementsByClassName('circle'), // Для того, чтобы присвоить переменной данные из class (Выбираются все значения)
    heart = document.querySelectorAll('.heart'), // Выбираем селектор - т.е. определеяем класс это или id, ставим точку или решетку, также можно определять элементы способом: .wrapper .heart
    oneHeart = document.querySelector('.heart'); // Выберется первый элемент из класса heart
console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle);
console.log(circle[2]); // Логи вывода в консоль

box.style.backgroundColor = 'green'; //Изменение стилей css для указанной переменной (Выше значения указанного в css)
btn[1].style.border = '2px solid black'; //Изменяем 2 кнопку из массива btn и даем ей свойство 2px solid black


let divFirst = document.createElement('div'); // Задаем переменной divFirst новый div
divFirst.classList.add('divfirst'); // Задаем переменной divFirst класс divfirst (В div'e) 
console.log(divFirst);

 document.body.appendChild(divFirst); // Выбираем документ, родительский селектор (body) и в конец него вставляем наш div с классом divFirst
 document.body.insertBefore(divSecond, circle[0]); // Добавить divSecond после первого эллемента в circle
 document.body.removeChild(circle[1]); // Удаляем второй эллемент из circle (Относится только для дочернего элемента), Дочерний элемент circle по отношению к body
 wrapper.removeChild(heart[1]); // Выбираем класс wrapper, после чего удаляем 2 эллемент из .wrapper .heart
 document.body.replaceChild(btn[1], circle[1]); // Мы заменяем 2 эллемент из btn на 2 эллемент из circle

divFirst.innerHTML = 'Hello World'; // Мы добавляем в divFirst меседж Hello World
divFirst.innerHTML = '<h1>Hello World</h1>' // Стилизация прошлого свойства под h1
divFirst.textContent = 'Hello World'; // Такая конструкция тоже приветствуется, аналогична первой записи с выводом


// GIT
// git cd - сменить репозиторий
// git init - запустить git
// git status - проверить статус файлов в репозитории
// git add -A - добавить все файлы под комит
// git add index.html - добавить отдельный файл
// git add *.html - добавить все файлы, оканчивающиеся на .html
// git commit -a -m"first commit" - комитим файлы (a - все файлы, m - сообщение о комите)
// git log - просмотр комитов и информация о них
// git remote add origin https://github.com/hellwood7/test.git - для конекта с личным сервером
// git push -u origin master - команда, которая пушит данные на ваш сервер и на вашу ветку

//LESSON 21 -- 

btn[0].addEventListener('mouseenter', function() { // Прописываем структуру функции, сначала пишем событие, которое должно произойти, потом пишем функцию которая должна происходить при данном событии
    alert('Вы навели на первую кнопку');
})

btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на эллементе ' + event.target); // Выводим в консоль - Событие, тип события(В данном случае click), после этого выводим цель события (В данном случае btn)
});

let link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault(); // Мы отменяем стандартное действие в браузере (В данном случае, когда мы перейдем по ссылке, она не сработает, а просто нажмется)
    console.log('Произошло событие: ' + event.type + ' на эллементе ' + event.target); // После того, как ссылка не сработает, в консоль выведется информация о действии
});

// Для того, чтобы использовать все эллементы селектора (например class= "btn"),мы должны провести следующие операции:
// let btn = document.querySelectorAll('button'); - Задаем для переменной btn все элементы из массива button (Выбираем все кнопки)
// btn.forEach(function(item)) { - Мы выбираем все элементы из btn и пихаем их в функцию item, дальше работаем с ней
//     item.addEventListener('mouseleave', function() { - Задаем для item'a дейсвтие 
//         console.log('Вы покинули поле кнопки'); - Прописываем в консоль, что произошло
//     });
// });
// Такую операцию мы используем, когда нам нужно выбрать все элементы и провести с ними операцию!!!


// NEXT THEME ---------------------------------------------------------------------------------------------------------------------------


let timerId =  setTimeout(sayHello, 3000,); // Задаем переменной timerId задержку в 3000 миллисекунд, перед ней идет функция sayHello, в которой будет позже записано действие
// clearTimeout(timerId); // Используется для остановки действия setTimeout
function sayHello() {
    alert('Hello World'); // Действие 
}

let repeat = setInterval(banner, 5000);
function banner() {
    console.log('Banner Hello World');
}          // Тоже самое, что и Timeout, но интервал, которы будет потворятся через кажды заданный промежуток времени


let btn = document.querySelector('.btn');
    element = document.querySelector('.box');

function myAnimation() {
    let position = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = position + 'px';
            element.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation); //  Простейщая анимация с передвижением блока по касательной

// Напишем функцию, которая будет писать в консоль при нажатии на одну из кнопок

let btnBlock = document.querySelector('.btn-block'), // Выбираем родмтельский элемент, в котором находятся кнопки
    btns = document.getElementsByTagName('button'); // Выбираем все кнопки

btnBlock.addEventListener('click', function(event) {  // Задаем для кнопок событие 
    if (event.target && event.target.tagName == 'BUTTON') { // Если target и тэг target это button то выводим в консоль
        // event.target.matches('button.first') - применяется для target'a класса first в button (Выбираются все элементы)
        console.log('Hello!');
    }
});



// УРОКИ JS ДЛЯ ПЕРВОГО КУРСА