const contenedor = document.querySelector(".row");
let documentFragment = document.createDocumentFragment(); //importante


const crearObjeto = (texto1,texto2) => {
    texto1 = `<h5>hola ${texto1}<h5>`;
    texto2 = `<h6>${texto2}<h6>`;
    return [texto1, texto2];
}

for(let i = 1; i <=11; i++){

    let numeroRandom = Math.trunc(Math.random()*100);
    let tarjeta = crearObjeto(i,numeroRandom);

    let div = document.createElement("DIV");
    div.classList.add("col");
    div.innerHTML = tarjeta[0] + tarjeta[1];
    div.addEventListener("click", () =>{
        document.querySelector(".keydata").value = numeroRandom;
    }); 
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);