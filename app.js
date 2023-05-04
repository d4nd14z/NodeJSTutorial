const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear(); //Limpiar la consola de JavaScript !!!

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log('Archivo', nombreArchivo, 'Creado.'))
    .catch( err => console.log(err));



