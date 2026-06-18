function balao(numero) {
    const fala = document.getElementById(`bal${numero}`);

    if (fala) {
        fala.style.display = "block";
    }
}

function balao2() {
    const baloes = document.querySelectorAll(".fala");

    baloes.forEach(balao => {
        balao.style.display = "none";
    });
}