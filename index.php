<?php 

$connect = mysqli_connect('localhost', 'root', '', 'data'); //Подключаемся к базе данных, вводим данные пользователя из phpmyadmin, последнее - имя базы
$select_db = mysqli_select_db($connect, 'data'); // Конектим к выбранной базе

$select = mysqli_query($connect, 'SELECT * FROM reviews'); // Делаем выборку из определенной таблицы

while ($result = mysqli_fetch_array($select)) { 
echo "<br> 
Имя: $result[name] <br> 
Отзыв: $result[content] <br> 
Дата: $result[datatime] <br>"; 
} 
// Вывод данных из базы (Выводится из таблицы и базы,которые были указаны выше)
?>