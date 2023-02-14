const usuarios = [
    {
        correo: "christhian2524",
        password : '123456'
    },
    {
        correo: "virginia",
        password : '123456'
    },
    {
        correo: "eric",
        password : '123456'
    }
]



// variables 
const correo = document.querySelector('.correo');
const password = document.querySelector('.password');
const login = document.querySelector('.ingresar');

/* Evento cuando el documento este cargado */
document.addEventListener('DOMContentLoaded', () => {
    const username = JSON.parse(localStorage.getItem('usuario-actual'));
    console.log(username)
    if (username !== null) {

        const btnLogin = document.querySelector('.btn-login');
        btnLogin.textContent = username.username;
    }
})

login.addEventListener('click', (e)=> {
    e.preventDefault();
    validarFormulario();
})

function validarFormulario(){
    if (correo.value === "" || password.value === "") {
        console.log("Campos Obligatorios");
        return
    }

    let autenticado = false;

    usuarios.forEach( usuario => {
        if (usuario.correo === correo.value && usuario.password === password.value) {
            autenticado = true;
        }
    })

    if (autenticado) {
        console.log("Bienvenido");

        /* Crear un objeto usuarioActual */
        const usuarioActual = {
            username : correo.value
        }

        /* Guardar en el localStorage */
        localStorage.setItem('usuario-actual', JSON.stringify(usuarioActual));
        
        // Mostrar alerta en la pantalla

        /*  */
        correo.value = "";
        password.value = "";
        
        setTimeout(() => {
            window.location = "./index.html"
        }, 3000);

    }else{
        // Mostrar alerta en la pantalla

        /*  */
        console.log("Largo...")
        return;
    }
    
}
