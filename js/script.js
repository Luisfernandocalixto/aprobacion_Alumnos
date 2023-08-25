
let valorIngresado = [] //  Array para ir almacenando los nombres ingresados por teclado
let nombre = []         //  Array para ir almacenando el nombre ingresado por teclado
let resultado = document.getElementById('mensaje')   // Mensaje en pantalla para mostrar la inf => id="mensaje"
let mensajeError = document.getElementById('nombreError') // Mensaje de error para mostrar => id="nombreError"

document.getElementById('formulario').addEventListener('submit', (event) => {
  event.preventDefault()

  // Crear parte de la lista de alumnos
  let agregadoAlumno = document.createElement('tr')

  // Variable para obtener nombre de alumno
  nombre = document.getElementById("nombreEntrada").value

  if (valorIngresado.includes(nombre)) {
    mensajeError.textContent = 'Este valor ya ha sido ingresado'
    return
  }

  mensajeError.textContent = ''

  // Agregando el nombre al array con push
  valorIngresado.push(nombre)
  nombre.value = ''

  // El nombre se muestra en elemento td creado
  let nombreAlumno = document.createElement('td')
  nombreAlumno.textContent = nombre

  // Variable para obtener calificacion
  let calificacion = document.getElementById("calificacion").value

  // La calificion se muestra en un elemento td creado 
  let calificacion_Alumno = document.createElement('td')
  calificacion_Alumno.textContent = calificacion

  //  Elemento que contiene el mensaje de aprobacion de cada alumno
  let mensajeAprobacion = document.createElement('td')

 /*  Si la calificacion del alumno es mayor o igual a 7 
  el alumno esta aprobado, caso contrario no */
  if (calificacion >= 7) {
    mensajeAprobacion.textContent = 'Aprobado'
    mensajeAprobacion.style.color='green'
    mensajeAprobacion.style.fontWeight= 'bold'
  }
  else {
    mensajeAprobacion.textContent = 'Reprobado'
    mensajeAprobacion.style.color='#9d2b2b'
    mensajeAprobacion.style.fontWeight= 'bold'
  }


  if (!nombre.textContent && !calificacion.textContent) {

    document.getElementById('formulario').reset()

  }
// Los elementos que se agregan con la informacion
  agregadoAlumno.appendChild(nombreAlumno)
  agregadoAlumno.appendChild(calificacion_Alumno)
  agregadoAlumno.appendChild(mensajeAprobacion)

  // Mensaje con la informacion del alumno para la pantalla => id="mensaje"
  resultado.appendChild(agregadoAlumno)

}) // Fin
