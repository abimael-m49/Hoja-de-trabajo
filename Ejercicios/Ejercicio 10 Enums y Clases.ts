enum Prioridad {
    ALTA = "🔴",
    MEDIA = "🟡",
    BAJA = "🔵"
}

enum EstadoTarea {
    PENDIENTE = "Pendiente",
    EN_PROGRESO = "En progreso",
    FINALIZADA = "Finalizada"
}


interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    prioridad: Prioridad;
    estado: EstadoTarea;
}

class GestorTareas {
    private tareas: Tarea[] = [];

    agregarTarea(titulo: string, prioridad: Prioridad) {
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo,
            completada: false,
            prioridad,
            estado: EstadoTarea.PENDIENTE
        };
        this.tareas.push(nuevaTarea);
    }

    listarTareas() {
        this.tareas.forEach(tarea => {
            console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}`);
        });
    }
}

const gestor = new GestorTareas();
gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA);
gestor.agregarTarea('Revisar correo', Prioridad.MEDIA);
gestor.agregarTarea('Comprar snacks', Prioridad.BAJA);

console.log("Listado de tareas:");
gestor.listarTareas();