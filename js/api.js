import { productsURL } from "./url.js";
export async function getProducts(){
    try {
    const response = await fetch (productsURL())

    if(!response.ok){
        throw new Error(`HTTP ${response.status} - ${response.statusText}`)
    }
    const data = await response.json()
    return data;
    }
    catch(error){
        console.error('Error en getProducts:', error);
        throw error;
    }    
}

 
