<!DOCTYPE html>
<html>
    <head>
		<meta charset="utf-8">
        <title>Лабораторная работа №4</title>
    </head>
    <body>
        <div>
            <form action="php/lab4f.php" method="post" enctype="multipart/form-data">
                <h1>Лабораторная работа №4</h1>
                <h2>Вычисление кратчайшего пути графа. </h2>
                <h3>Введите матрицу ориентированного графа. Поставьте "p" если между вершинами нет связи.
                    На главной диагонали матрицы
                должны быть проставлены нули.</h3>
                <p><textarea cols="18" rows="6" name="matrica"></textarea></p><br>
                <div>
                    Начальная вершина:<input type = "text" name = "first"><br>
                    Конечная вершина: <input type = "text" name = "second"><br>
			    </div>
                <input type = "submit" value = "Результат">
            </form>
        </div>
    </body>
</html>
