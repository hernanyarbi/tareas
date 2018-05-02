const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');
let command = argv._[0];

switch (command) {
    case 'crear':
        toDo.create(argv.description)
        console.log('Crear una tarea');
        break;
    case 'listar':
        let toDoList = toDo.getList();
        for (const to_do of toDoList) {
            console.log("======Por Hacer======".green);
            console.log('Descripcion:', colors.green(to_do.description));
            console.log('Estado:', to_do.complete ? 'Completa'.green : 'Sin Completar'.red);
            console.log("=====================".green);
        }
        console.log('Mostrar tareas');
        break;
    case 'actualizar':
        let updated = toDo.update(argv.description, argv.complete);
        console.log('Modificar tareas', updated);
        break;
    case 'eliminar':
        let del = toDo.deleteTask(argv.description);
        console.log('Eliminacion de tareas', del);
        break;
    default:
        console.log('comando no reconosido');
}