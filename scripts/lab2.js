function validate_matrix(a) {
    const size = a.length;
    return a.every(value =>
        value.length === size
    );
}
function calculate() {
    const matrix = document.getElementById('matrix');
    console.log(matrix);
    let arr2d = matrix.value.split('\n').map(value => value.trim()); /*удаляем пробельные символы с начала и конца строки */
    console.log(arr2d);
    const a = arr2d.map(value => value.split(" ").map(value1 => Number.parseInt(value1.split(' '))));

    if (!validate_matrix(a)) {
        alert("incorrect input");
        return;
    }
    const textField = document.getElementById("result")
    const output = `Рефлексивно?: ${reflection(a)}
    Симметрично ?: ${symmetrical(a)}
    Антисимметрично?: ${antisymmetrical(a)}
    Транзитивно?: ${transitivity(a)}`
    textField.innerText = output
}


/**
 * Функция рефлективности, которая проверяет, во всех ли элементах по диагонали с левого верхнего
 * угла и правого нижнего находятся единицы*/
function reflection(a) {

    const n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i][i] === 0) {
            return false;
        }
    }
    return true;

}

/**
 * алгоритм проверяет все ли элементы симметричны относительно
 * главной диагонали. Если это так, то матрица симметрична.
 *
 */
function symmetrical(a) {
    const n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (a[i][j] !== a[j][i]) {
                return false;
            }

        }

    }
    return true;
}

/**
 *
 * При кососимметричности в отношении не должно быть симметричных элементов,
 * кроме тех элементов, которые находятся на главной диагонали, то есть тех,
 * которые имеют отношения с самим собой. Алгоритм проверяет отсутствие симметрии
 * относительно главной диагонали, и если это оказывается так, то функция возвращает истину.
 */

function antisymmetrical(a) {
    const n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                if (a[i][j] === a[j][i]) {
                    return false;
                }
            }
        }
    }
    return true;


}

/**
 * Алгоритм проверки транзитивности находит все возможные комбинации трёх элементов,
 * и проверяет, является ли отношения между ними транзитивными. Если они транзитивны,
 * то это означает, что если есть отношение между элементом a и элементом  b, а также есть
 * отношение между элементом b и элементом c, то обязательно должно быть отношение между
 * элементом a и элементом c.
 *
 */
function transitivity(a) {
    const n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let g = 0; g < n; g++) {
                if (a[i][j] === a[j][g]) {
                    if (a[i][g] !== a[i][j])
                        return false
                }
            }
        }
    }
    return true;

}