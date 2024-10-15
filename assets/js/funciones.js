// Funciones TO-DO List
// Array para almacenar las tareas

let tareas = [
    { nombre: "Hacer el Mercado", completada: true },
    { nombre: "Estudiar para la prueba", completada: false },
    { nombre: "Sacar a pasear a Zuko", completada: false }
  ];
  
  // Función para agregar una nueva tarea
  function agregarTarea() {
    let nuevaTarea = document.getElementById("nuevaTarea").value;
    if (nuevaTarea !== "") {
      tareas.push({ nombre: nuevaTarea, completada: false });
      actualizarLista();
      document.getElementById("nuevaTarea").value = "";
    }
  }
  
  // Función para eliminar una tarea
  function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
  }
  
  // Función para marcar una tarea como completada
  function completarTarea(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarLista();
  }
  
  // Función para actualizar la lista de tareas en la página
  function actualizarLista() {
    let lista = document.getElementById("listaTareas");
    let total_tareas = document.querySelector(".total-tareas");
    let tareas_realizadas = document.querySelector(".tareas-realizadas");
    let cuenta_tareas = 0;//Number(total_tareas.innerHTML);
    let cuenta_realizadas = 0;//Number(tareas_realizadas.innerHTML);
    lista.innerHTML = "";
    for (let i = 0; i < tareas.length; i++) {
      let tarea = tareas[i];
      let elemento = document.createElement("li");
      cuenta_tareas = cuenta_tareas + 1;      
      if (tarea.completada) {const_smoke = cuenta_realizadas = cuenta_realizadas + 1;}
      elemento.innerHTML = `
        <span class="${tarea.completada ? 'completada' : ''}">${tarea.nombre}</span>
        <div>
          <button onclick="completarTarea(${i})">${tarea.completada ? 'Deshacer' : 'Completar'}</button>
          <button onclick="eliminarTarea(${i})">Eliminar</button>
        </div>
      `;
      lista.appendChild(elemento);
    }
    total_tareas.innerHTML = cuenta_tareas;
    tareas_realizadas.innerHTML = cuenta_realizadas;
  }
  
  // Inicializar la lista al cargar la página
  actualizarLista();