<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "utf-8">
    <title>Лабораторная работа 2</title>
    <link rel = "stylesheet" href = /styles/style.css>
    <script type = "text/javascript" src = "/scripts/lab2.js"></script>
</head>
<body>
<h1>Лабораторная работа №2</h1>
<form method = "" action="">
    <table>
        <tr>
            <td>Первое множество</td>
            <td><label for="matrix"></label><textarea id="matrix" value ="" size ="100"></textarea></td>
        </tr>
        <tr>
            <td colspan = "2" ><input type = "button" value="Сделать рассчет" onclick="calculate();"/></td>
        </tr>
    </table>
</form>

<div id ="full-result">
<p id="result"></p>
</div>

</body>

</html>

