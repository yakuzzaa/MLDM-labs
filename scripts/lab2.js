function calculate() {
    const matrix = document.getElementById('matrix');
    console.log(matrix);
    let arr2d = matrix.value.split('\n').map(value => value.trim());
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

function validate_matrix(a) {
    const size = a.length;
    return a.every(value =>
        value.length === size
    );
}


function reflection(a) {

    const n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i][i] === 0) {
            return false;
        }
    }
    return true;

}

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