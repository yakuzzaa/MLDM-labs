<?php
    header("Content-Type: text/html; charset=utf-8");
    $matrix;
    $first;
    $second;
    $minlen = 0;
    $shortS = array();
    function validation(& $matrix) {
        /*
         Проверка на количество символов
        */
        for ($i = 0; $i < count($matrix); $i++) {
            if (count($matrix[$i]) > count($matrix)) {
                return 1;
            }
        }
        /*
         Проверка на наличие петель
        */
        for ($i = 0; $i < count($matrix); $i++) {
            if ($matrix[$i][$i] != 0) {
                return 2;
            }
        }

        /*Проверка на наличие каких-либо символов (не чисел) и на отрицательные значения */
        for ($i = 0; $i < count($matrix); $i++) {
            for ($j = 0; $j < count($matrix[$i]); $j++) {
                if (!is_numeric($matrix[$i][$j]) && $matrix[$i][$j] != p) {
                    return 3;
                }
            }
        }
        return 0;
    }
    /*
     Валидация введённых номеров начальной и конечной точки графа
    */
    function validationGraf(& $both, $size) {

        if ($both == "") {
            echo "Заполните поля ввода";
            exit;
        }

        $both = (int)$both - 1;
        if ($both < 0 || $both >= $size) {
            echo "Вы ввели вершину(вершины), которой(которых) нет в данном графе";
            exit;
        }
    }

    function finder($point, $length, $path){
        global $second;
        global $minlen;

        if ($point == $second){

            if ($minlen == 0 || $length < $minlen) {
                global $shortS;
                $minlen = $length;
                if ($length == 0) {
                    $path[] = $point;
                }
                $shortS = $path;
            }
        }

        else {
            global $matrix;
            for ($i = 0; $i < count($matrix[$point]); $i++) {
                if ($matrix[$point][$i] !== 0 && $matrix[$point][$i] !== "p") {
                    if ($minlen == 0 || $length + $matrix[$point][$i] < $minlen) {
                        if (!in_array($i, $path)) {
                            if ($path[count($path) - 1] == $point) {
                                $path[] = $i;
                            }
                            else {
                                $path[count($path) - 1] = $i;
                            }
                            finder($i, $length + $matrix[$point][$i], $path);
                        }
                    }
                }
            }
        }
    }

    $matrix = explode(PHP_EOL, $_POST["matrica"]);
    for ($i = 0; $i < count($matrix); $i++) {
        $matrix[$i] = explode(" ", $matrix[$i]);
    }
    $first = $_POST["first"];
    $second = $_POST["second"];
    if (validation($matrix) == 1) {
        echo "ввод неправильный (матрица должна быть квадратичной)";
    }
    else if (validation($matrix) == 2) {
        echo "ввод неправильный (граф должен быть без петель)";
    }
    else if (validation($matrix) == 3) {
        echo "ввод неправильный (в матрице есть сторонние символы)";
    }
    else {
        validationGraf($first, count($matrix));
        validationGraf($second, count($matrix));
        finder($first, 0, $path = array($first));
        if ($minlen == 0 && $first != $second) {
            echo "Путь из вершины " . ($first + 1) . " в вершину " . ($second + 1) . " не найден.";
        }
        else {
            echo "Длина кратчайшего пути из вершины " . ($first + 1) . " в вершину " . ($second + 1) . " равна " . $minlen . "<br>";
            echo "Кратчайший путь ";
            for ($i = 0; $i < count($shortS) - 1; $i++) {
                echo ($shortS[$i] + 1) . " - ";
            }
            echo $shortS[count($shortS) - 1] + 1;
        }
    }
?>
