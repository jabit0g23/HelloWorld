
//con fetch

// const getName = async ()=>{

//     let peticion = await fetch("informacion.txt");
//     let resultado = await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("nombre");
//     div.innerHTML = resultado.name;
//     document.body.appendChild(div);
// }

// const getAge = async ()=>{

//     let peticion = await fetch("informacion.txt");
//     let resultado = await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("edad");
//     div.innerHTML = resultado.age;
//     document.body.appendChild(div);
// }

//con Axios

const getName = async ()=>{

    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = resultado.data.name;
    document.body.appendChild(div);
}

const getAge = async ()=>{

    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.innerHTML = resultado.data.age;
    document.body.appendChild(div);
}

document.getElementById('getName').addEventListener("click",getName);
document.getElementById('getAge').addEventListener("click",getAge);


