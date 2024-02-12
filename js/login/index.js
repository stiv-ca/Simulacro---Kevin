//Importaciones
import { urlUsers } from "../api/URLs.js";
//Selectores

const formlogin = document.querySelector('#form-login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


//Eventos
formlogin.addEventListener("submit", e => {
    //Prevenir que el formulario se envie por defecto
    e.preventDefault();

    logIn();
});

async function logIn() {
    const response = await fetch(`${urlUsers}?email=${email.value}`);
    const data = await response.json();

    if (!data) {
        console.log("Email no registrado");
        return;
    }

    if(data[0].password !== password.value) {
        console.log("Constraseña Invalida");
        return
    }

    localStorage.setItem("user",JSON.stringify(data[0]));
    window.location.href = "administrator(1).html"

    
}   

