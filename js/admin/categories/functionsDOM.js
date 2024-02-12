//Configurando la tabla del administrador de la categoria para poder que
//Que se agrege a la tabla 

import { cleanHTML } from "../../utils/cleanHTML.js";
import { deleteCategory, descriptionCategory, nameCategory } from "./index.js";
const categoriasTbody = document.querySelector("#categorias-tbody");
export const idCategoryUpdate = document.querySelector("#idCategoryUpdate");
export const btnAddCategoryModal = document.querySelector("#btnAddCategoryModal");


export function printCategories(categories) {

    //Limpiar las cateorias de relleno:

    // categoriasTbody.innerHTML =""; //Esta es una manera

    cleanHTML(categoriasTbody);//Esta es la otra manera

    //Empieza el procedimiento para agregar a la tabla de administrador
    categories.forEach(category => {
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdDescription = document.createElement("td");
        const tdButtons = document.createElement("td");

        /**CONFIGURACIÓN DE LOS BOTONES */
        
        //Creando los botones de editar y eliminar
        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");

        //Configurando el texto de cada uno
        btnDelete.textContent = "Eliminar";
        btnEdit.textContent = "Editar";

        //Sumandole las clases de boostrap
        btnDelete.classList.add("btn","btn-danger");
        btnEdit.classList.add("btn","btn-primary");

        //Eventos
        btnDelete.addEventListener('click',() => {  
            deleteCategory(category.id)
        });

        btnEdit.addEventListener('click',() => {
            editCategory(category);
        });

        /**FIN DE LA CONFIGURACIÓN DE LOS BOTONES */

        //Seleccionamos los tres inputs y le damos la variable de iteración
        //por que es la va a recorrer la lista variable que aparezaca 
        //pues aparecera en la tabla

        tdId.textContent = category.id; 
        tdName.textContent = category.name;
        tdDescription.textContent = category.description;

        
        //Agregar los botones en la tabla de botones (tdButtons)
        tdButtons.appendChild(btnDelete);
        tdButtons.appendChild(btnEdit);

        //Metemos todo a la tabla principal (tr)

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdButtons);


        categoriasTbody.appendChild(tr);// Agrega el elemento al 
        //cuerpo de la tabla
    });
};

function editCategory(category) {
    nameCategory.value = category.name;
    descriptionCategory.value = category.description;
    idCategoryUpdate.value = category.id;
    btnAddCategoryModal.click()
}

