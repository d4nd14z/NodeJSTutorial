const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base, listar, hasta) => {        
    try {

        console.clear(); //Limpiar la consola de JavaScript !!!

        if (listar){
            console.log('=============='.rainbow);
            console.log(` Tabla del ${base}`.rainbow);
            console.log('=============='.rainbow);
        }

        let salida = '';
        let consola = '';
        for (let i=0; i<hasta; i++){
            result = `${base * i}`.yellow;
            salida += `${base}` + ` x `.blue + `${i}` + ` = ` + `${result}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }
        
        if (listar){
            console.log(salida);
        }

        await fs.writeFileSync(`./salida/tabla${base}.txt`, consola);
        return `tabla${base}.txt`.red;
    }
    catch(error){
        throw error;
    }      
}

module.exports = {
    crearArchivoTabla
}