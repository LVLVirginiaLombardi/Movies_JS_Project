/* SIMULADOR */
alert("Gracias por entrar en nuestra página, tenemos variados Dibujos que pueden ser de su agrado");
alert("Tenemos un descuento en Dibujos Digitales si llegaran a ser de su interés, tienen un 10% de descuento :)");

/* DECLARACION DE CLASE TIPO DIBUJO ES6 */
class Dibujo {
    constructor(nombre, numero, tipo, precio) {
        this.nombre = nombre;
        this.numero = numero;
        this.tipo = tipo;
        this.precio = parseFloat(precio);
        this.precioIva = this.sumaIva();
        this.precioDescuento = this.descuentoDiez();
    }
    /* VERIFICACIÓN QUE EL DIBUJO SELECCIONADO CORRESPONDA AL OBJETO REFERENCIADO */
    agregarDibujo(numeroDibujo) {
        if (numeroDibujo == this.numero) {
            return "Dibujo:" + " " + this.nombre + " " + "$" + " " + this.precio;
        }
    }
    sumaIva() {
        let iva = 1.21
        return this.precio * iva;
    }
    descuentoDiez() {
        let descuento = 0.10
        return this.precio - this.precio * descuento;
    }
}
/* END DECLARACION DE CLASE TIPO DIBUJO ES6 */

/* ARREGLO DE DIBUJOS */
const dibujos = [];
dibujos.push(new Dibujo("Girl in Blue", 1, "Digital", 500));
dibujos.push(new Dibujo("Girl in Pink", 2, "Acuarela", 800));
dibujos.push(new Dibujo("Girl from Ares", 3, "Fibra en Papel Común", 1000));
dibujos.push(new Dibujo("Alien Girl", 4, "Digital", 300));
dibujos.push(new Dibujo("Cat Girl", 5, "Digital", 600));
dibujos.push(new Dibujo("Tim Burton's style Girl", 6, "Acuarela", 400));
dibujos.push(new Dibujo("Girl in White", 7, "Acuarela", 700));
dibujos.push(new Dibujo("Girl in Green", 8, "Acuarela", 900));
dibujos.push(new Dibujo("Fantastic Girl", 9, "Acuarela", 1000));
/* END ARREGLO DE DIBUJOS */

/* PREGUNTO A USUARIO QUE TIPOS DE DIBUJOS QUIERE */
const tipo = parseInt(prompt("Tenemos los siguientes Tipos de Dibujos:\n 1.Acuarela\n 2.Fibra en Papel Común\n 3.Digital"));
/* SWITCH POR TIPO INGRESADO POR USUARIO */
switch (tipo) {
    case 1:
        /* LLAMAMOS FUNC FILTRARTIPO EN CASE1 ACUARELA */
        const total2 =filtrarTipo("Acuarela");
        alert("El total de su compra con IVA es: $" + total2);
        break;
    case 2:
        /* LLAMAMOS FUNC FILTRARTIPO EN CASE2 FIBRA EN PAPEL COMÚN */
        const total3 = filtrarTipo("Fibra en Papel Común");
        alert("El total de su compra con IVA es: $" + total3);
        break;
    case 3:
        /* LLAMAMOS FUNC FILTRARTIPO EN CASE3 DIGITAL*/
        const total = filtrarTipo("Digital");
        alert("Total con IVA: " + total + "\nDescuento: " + Math.round(total*0.10*100)/100 + "\n\nTotal a pagar: " + (total-Math.round(total*0.10*100)/100));
        break;
    default:
        break;
}

/* FUNCION PARA FILTRAR POR TIPO */
function filtrarTipo(tipo) {
    
    let filtro = dibujos.filter(dibujo => dibujo.tipo === tipo);
    let nombreDibujo = "";
    
    for (let index = 0; index < filtro.length; index++) {
        filtro[index].numero = index + 1;
        nombreDibujo += (index + 1) + "." + filtro[index].nombre + "\n";
    }
    
    const total = elegirNombreDibujo(nombreDibujo, filtro);
    return total;
}


/* FUNC ELEGIRNOMBREDIBUJO PASAMOS POR PARAMETRO NOMBRE Y FILTRO */
/* FUNCIÓN PARA QUE USUARIO ELIJA DIBUJO SEGÚN EL TIPO Y SE LE PREGUNTA SI QUIERE ELEGIR OTRO */
function elegirNombreDibujo(nombre, filtro) {
    let total = 0;
    let precio, flag = true;
   
    /* MIENTRAS FLAG */
    while (flag) {
        const escogerDibujo = parseInt(prompt("Ingrese el número del Dibujo que desea:\n \n" + nombre))
        precio = filtro.find(x => x.numero === escogerDibujo);

        alert(precio.precio);
        let confirmar = confirm("Deseas elegir otro Dibujo?");
        if (!confirmar) {
            flag = false;
        } 
        total += precio.precioIva;
    }
    return total;
}
 /* END SIMULADOR */