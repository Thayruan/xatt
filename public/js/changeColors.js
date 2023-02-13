document.getElementById("change-colors").addEventListener("click", function () {
    // Gera cores aleatórias
    let backgroundColor = getRandomColor();
    let textColor = getRandomColor();

    // Verifica se a cor gerada é verde ou vermelho, e gera uma nova cor se for o caso
    while (backgroundColor === "#00ff00" || backgroundColor === "#ff0000") {
        backgroundColor = getRandomColor();
    }

    while (textColor === "#00ff00" || textColor === "#ff0000") {
        textColor = getRandomColor();
    }



    // Atualiza a cor de fundo da página e a cor dos textos que não são verde ou vermelho
    document.body.style.background = ('rgb(0,0,0);')
    document.body.style.background = (`linear-gradient(180deg, rgba(0,0,0,1) 0%, ${backgroundColor} 36%)`);
    document.querySelectorAll("small:not(.success-message):not(.error-message)").forEach(function (p) {
        p.style.color = textColor;
    });

    // Salve a cor de fundo no Firebase Database
    database.ref("backgroundColor").set({
        color: backgroundColor
    });
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Obtenha a referência ao nó "backgroundColor" no Firebase Database
var backgroundColorRef = database.ref("backgroundColor");

// Adicione um evento de "value" ao nó "backgroundColor"
backgroundColorRef.on("value", function (snapshot) {
    // Obtenha a cor de fundo salva
    let backgroundColor = snapshot.val().color;
    console.log(backgroundColor)

    // Defina a cor de fundo
    document.body.style.background = ('rgb(0,0,0);')
    document.body.style.background = (`linear-gradient(180deg, rgba(0,0,0,1) 0%, ${backgroundColor} 36%)`);
});