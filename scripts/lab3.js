function check() {
    let check = 0;
    let matrix = document.getElementById("matrix").value.split("\n");
    let matrixWidth = matrix[0].split(" ").length;

    for (let i = 0; i < matrix.length; i++) {
        let split = matrix[i].split(" ");

        for (let j = 0; j < split.length; j++) {
            if(!(split[j] === 0 || split[j] === 1)) {
                check = 1;
            }
        }

        if(split.length !== matrixWidth) {
            check = 2;
        }
    }

    if (check === 0) {
        let ycheck = true;
        for (let i = 0; i < matrix.length; i++) {
            let xcheck = 0;
            let split = matrix[i].split(" ");
            for (let j = 0; j < matrixWidth; j++) {
                if (split[j] === 1) {
                    xcheck++;
                }
            }
            if (xcheck !== 1) {
                ycheck = false;
            }
            if (ycheck) {
                document.getElementById("Result").innerText = "Отношение является функциональным.";
            }
            else {
                document.getElementById("Result").innerText = "Отношение не является функциональным.";
            }
        }
    }

    else if (check === 1) {
        alert("В матрице могут быть только бинарные элементы!")
    }
    else {
        alert("Матрица не прямоугольная!")
    }
}