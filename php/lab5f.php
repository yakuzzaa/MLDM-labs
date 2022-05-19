<?php
    header("Content-Type: text/html; charset=utf-8");
    function validation($matrix) {
        /*
         Проверка на количество  символов
        */
        for ($i = 0; $i < count($matrix); $i++) {
            if (count($matrix[$i]) > count($matrix)) {
                return 1;
            }
        }
        /*
         Проверка на наличие петель в графе
        */
        for ($i = 0; $i < count($matrix); $i++) {
            if ($matrix[$i][$i] != 0) {
                return 2;
            }
        }
        /*
        * Проверка на наличие каких-либо символов (Кроме чисел) и на отрицательные значения
        */
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
    алгоритм Флойда-Уоршелла.
    */
    function floydWarshal($matrix) {
        $way = array();
        for ($i = 0; $i < count($matrix); $i++) {
            $way[$i] = array_fill(0, count($matrix), 0);
            for ($j = 0; $j < count($matrix); $j++) {
                if (intval($matrix[$i][$j]) != 0 || $i == $j) {
                    $way[$i][$j] = 1;
                }
            }
        }
        for ($k = 0; $k < count($matrix); $k++) {
            for ($i = 0; $i < count($matrix); $i++) {
                for ($j = 0; $j < count($matrix); $j++) {
                    if ($way[$i][$j] || ($way[$i][$k] && $way[$k][$j])) {
                        $way[$i][$j] = 1;
                    }
                }
            }
        }
        return $way;
    }
    /*
    функция отрисовки
    */
    function printmatrix($matrix) {
        for ($i = 0; $i < count($matrix); $i++) {
            for ($j = 0; $j < count($matrix[$i]); $j++) {
                $matrix[$i][$j] = strval($matrix[$i][$j]);
                echo $matrix[$i][$j];
            }
            echo "<br>";
        }
    }
    /*создание двумерного массива */
    $matrix = strval($_POST['matrica']);
    $matrix = explode("\n", $matrix);
    $matrix = array_filter($matrix, 'strlen');
    for ($i = 0; $i < count($matrix); $i++) {
        $matrix[$i] = explode(" ", $matrix[$i]);
        $matrix[$i] = array_filter($matrix[$i], 'strlen');
        $matrix[$i] = array_values($matrix[$i]);
        for ($j = 0; $j < count($matrix[$i]); $j++) {
            $matrix[$i][$j] = trim($matrix[$i][$j]);
        }
    }
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
        echo "вы ввели:<br><br>";
        echo printmatrix($matrix);
        echo "<br>полученная матрица достижимости:<br><br>";
        echo printmatrix(floydWarshal($matrix));
    }
?>
