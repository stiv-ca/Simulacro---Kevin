//Importamos las funciones que necesitemos
import { post,get, deleteHttp } from "../../api/clientHttp.js";
import { urlCategories } from "../../api/URLs.js";
import { printCategories } from "./functionsDOM.js";
//Selectores del formulario, nombre de la categoria y la descripción

const formCategories = document.querySelector("#formCategories");   
export const nameCategory = document.querySelector("#nameCategory");
export const descriptionCategory = document.querySelector("#descriptionCategory");


//Se hace un escuchader al formulario y es casi la misma logica con lo ue se hace en el 
//formaulario del login

formCategories.addEventListener("submit", (e) => {
    e.preventDefault();

    createCategory();
});

document.addEventListener("DOMContentLoaded", () => {
    getCategories()
});

//Realizamos una función que va a crear una categoria

async function createCategory() {

    const newCategory = {
        name:nameCategory.value,
        description: descriptionCategory.value
    };
    
    await post(urlCategories,newCategory    );
};

async function getCategories() {
    const data = await get(urlCategories);
    console.log(data);

    printCategories(data)
};

export async function deleteCategory(id) {

    await  deleteHttp(`${urlCategories}/${id}`);

};




