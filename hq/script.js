function b(quadro) {

    b2();

    switch (quadro) {

        case 1:
            document.getElementById("b1").style.display = "block";
            document.getElementById("b2").style.display = "block";
            break;

        case 2:
            document.getElementById("b4").style.display = "block";
            document.getElementById("b5").style.display = "block";
            break;

        case 3:
            document.getElementById("b6").style.display = "block";
            break;

        case 4:
            document.getElementById("b7").style.display = "block";
            document.getElementById("b8").style.display = "block";
            document.getElementById("b9").style.display = "block";
            break;
    }
}

function b2() {

    const baloes = document.querySelectorAll(".fala");

    baloes.forEach(function (balao) {
        balao.style.display = "none";
    });

}