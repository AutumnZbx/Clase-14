function obtenerDigimonPromesas(){
    return new Promise(function(resolve,reject){

        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(function(digimones){
            if(!digimones.ok){
                throw new Error("Error po aweonao");
            }
            return digimones.json();
        })
        .then(function(data){
            resolve(data);
        })
        .catch((error)=>{
            reject(`El error es: ${error}`);
        })
    })
}

function generaraSaludo(){
    console.group("Hola");
}

obtenerDigimonPromesas()
    .then((digimones)=> {
        digimones.map((digimon)=>{
            console.log(digimon);
        })
    })
    .catch((error)=>{
        console.log(`el error es: ${error}`);
    })

    
generaraSaludo();