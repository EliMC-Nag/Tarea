let process = require('process');
let moduloTareas = require('./tareas');

let comando = process.argv[2];

switch (comando) {

    case 'listar':
        let tareas = moduloTareas.leerJSON();
        if (tareas.length === 0) {
            console.log("La lista de tareas está vacía")
        } else {
            console.log("----------------------------")
            console.log("Este es tu listado de tareas")
            console.log("----------------------------")
            for (let i = 0; i < tareas.length; i++) {
                console.log("Titulo de la tarea: " + tareas[i].titulo + ' - estado: ' + tareas[i].estado)
            }
        }
        break;

    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.escribirJSON(titulo,estado);
        /*console.log(moduloTareas.leerJSON());*/
        break;

    case 'deshacer' :
        moduloTareas.deshacer();
        break;

    case 'buscar' :
        let resultado = moduloTareas.buscarTarea(process.argv[3]);
        resultado.forEach(tarea => {
            console.log(tarea);
        });
        break;

    default:
        break;
}

/*const fs = require('fs'); //modullo: "files system"
const process = require('process') //modulo: "process"

let tareasJson = fs.readFileSync('./tareas.json','utf-8');*/
/*console.log(typeof tareasJson);*/
/*let tareas = JSON.parse(tareasJson);*/
/*console.log(typeof tareas);*/