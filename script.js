
let rolling = window.document.querySelector(".rolling")

for (let c = 1; c <= 100; c++) {
    let imagem = document.createElement("img")
    imagem.src = "assets/banner.svg"
    rolling.appendChild(imagem)
}