const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar.'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Muestra los resultados en consola.'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    default: 12,
                    describe: 'Limite de los valores de la multiplicacion'
                })
                .check((argv, options) => { 
                    if ( isNaN(argv.b)){
                        throw("base paramater must be a number, and is required.")
                    }
                    return true;
                })
                .argv;

module.exports = argv;