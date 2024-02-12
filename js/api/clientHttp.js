/**Basicamente de lo que se encarga esta función es que va añadir a la base de datos las 
 * nuevas categorias que el usuario o el administrador en el caso concreto vaya creando, para
 * no irla creando todas las veces que la necesitemos y no saturar el fichero principal pues
 * lo metemos en otro fichero y la exportamos 
 * Y también aqui estamos haciendo lo del CRUD
 * C: Create (POST)
 * R: Remove
 * U: Update 
 * D: Delete */

export async function post(url, info) {
    try {
        const response =  await fetch(url, {
            method : "POST",
            headers:{'Content-Type': 'application/json'},
            body   : JSON.stringify(info),
        });
    
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    };
};


export async function get(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;

    } catch (error) {
        console.error(error);
    };
};

export async function deleteHttp(url) {
    try {
        
        const response = await fetch(url,{
            method : "DELETE",
        });

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error(error);
    }
}