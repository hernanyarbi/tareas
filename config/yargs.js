const opts = {
    description: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { description: opts.description })
    .command('actualizar', 'Actualiza una tarea por hacer', opts)
    .command('eliminar', 'Elimina una tarea por hacer', { description: opts.description })
    .help()
    .argv;

module.exports = {
    argv
}