
//polimorfismo, los objetos se comportan de manera distinta ya que tienen propiedades distintas
//herencia, toma todo lo de una clase y le agrega cosas nuevas

class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInfo() { document.write(this.info + "‹br›") }
}

class perro extends animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }

    get getRaza(){
        return this.raza;
    }

    static ladrar(){
        alert("WAW!");
    }
}

const perrito1 = new perro("a",1,"b","c");