const listadoDibujos = [];

class Dibujo{
    constructor(nombre, numero, tipo, precio, imagen){
        this.nombre= nombre;
        this.numero = parseInt(numero);
        this.tipo = tipo;
        this.precio = this.sumaIva(parseInt(precio));
        this.imagen = imagen
    }

    sumaIva(precio){
        return precio*1.21;
    }

    descuentoDiez(){
        return this.precio - this.precio*0.10;
    }
}


const DATOS = [
    {
      "nombre": "Cat",
      "numero": 1,
      "tipo": "Digital",
      "precio": "1000",
      "imagen": "./img/5.jpeg"
    },
    {
      "nombre": "Girl in Pink",
      "numero": 2,
      "tipo": "Digital",
      "precio": "800",
      "imagen": "./img/4.jpeg"
    }, 
    {
      "nombre": "Girl with white Eyes",
      "numero": 3,
      "tipo": "Digital",
      "precio": "1000",
      "imagen": "./img/6.jpeg"
    },
    {
      "nombre": "Alien Girl",
      "numero": 4,
      "tipo": "Fibra en Papel Común",
      "precio": "800",
      "imagen": "./img/10.jpeg"
    },
    {
      "nombre": "Girl in Green",
      "numero": 5,
      "tipo": "Digital",
      "precio": "700",
      "imagen": "./img/8.jpeg"
    },
    {
      "nombre": "Girl in White",
      "numero": 6,
      "tipo": "Digital",
      "precio": "1000",
      "imagen": "./img/7.jpeg"
    },
    {
      "nombre": "Muelle",
      "numero": 7,
      "tipo": "Acuarela",
      "precio": "500",
      "imagen": "./img/2.jpeg"
    },
    {
      "nombre": "Bosque",
      "numero": 8,
      "tipo": "Acuarela",
      "precio": "800",
      "imagen": "./img/3.jpeg"
    },
    {
      "nombre": "Girl in Cage",
      "numero": 9,
      "tipo": "Acuarela",
      "precio": "1000",
      "imagen": "./img/1.jpeg"
    },
    {
      "nombre": "Telas",
      "numero": 10,
      "tipo": "Acuarela",
      "precio": "700",
      "imagen": "./img/acrilico.JPEG"
    },
    {
      "nombre": "Amor ....",
      "numero": 11,
      "tipo": "Acuarela",
      "precio": "1000",
      "imagen": "./img/body.JPG"
    },
    {
      "nombre": "Diablo Girl",
      "numero": 12,
      "tipo": "Acuarela",
      "precio": "1000",
      "imagen": "./img/11.jpeg"
    },
    {
      "nombre": "Girl Cat Eyes",
      "numero": 13,
      "tipo": "Digital",
      "precio": "1000",
      "imagen": "./img/photo2.JPG"
    },
    {
      "nombre": "Girl on Fire",
      "numero": 14,
      "tipo": "Acuarela",
      "precio": "1000",
      "imagen": "./img/photo_logo.PNG"
    },
    {
      "nombre": "Girl from Water",
      "numero": 15,
      "tipo": "Fibra en Papel Común",
      "precio": "1000",
      "imagen": "./img/producto.PNG"
    }

  
];

DATOS.forEach( dibujo => {
    const {nombre, tipo, numero, precio, imagen} = dibujo

    const newDibujo = new Dibujo(nombre, numero, tipo, precio, imagen);
    listadoDibujos.push(newDibujo);
})
