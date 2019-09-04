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
// УРОКИ JS ДЛЯ ПЕРВОГО КУРСА



// GIT
// git cd - сменить репозиторий
// git init - запустить git
// git status - проверить статус файлов в репозитории
// git add -A - добавить все файлы под комит
// git add index.html - добавить отдельный файл
// git add *.html - добавить все файлы, оканчивающиеся на .html
// git commit -a -m"first commit" - комитим файлы (a - все файлы, m - сообщение о комите)