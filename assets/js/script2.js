const obtenerDigimonAsyncAwait = async() =>{
    try {
        const response = await fetch()
        if (!response.ok){
            throw new Error(`Hubo un problema al obtener los datos de Digimon`);
        }
        const data = await response.json();
        return data;
    } catch(error){
        throw error;
    }
}

// Ejemplo de uso
(async function(){
    try{
        const data= await obtenerDigimonAsyncAwait();
        console.log(`Datos de digimon obtenidos con exito:`,data);
    } catch(error){
        console.error(`Error al obtener datos de digimon:`,error);
    }
})();

obtenerDigimonAsyncAwait();