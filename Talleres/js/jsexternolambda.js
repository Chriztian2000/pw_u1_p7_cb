const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerHTML = valor;
}
const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}
const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}
const agregarElemento = (idelemento, texto) => {
    document.getElementById(idelemento).innerHTML += texto;
}
const conceptosJS = () => {
    /* Tipos de Variables en JS 
    var: variable global, ya no se usa conmúnmente
    let: variable local, se usa dentro del bloque {}, no se puede volver a declarar en el mismo bloque
    const: variable constante, se utiliza cuando cuyo valor no va a cambiar
    */
    let nombre = "Roberto";
    let edad = 23;
    const PI = 3.1416;

    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("PI: " + PI);
    console.log("Entro al metodo para calcular");
    /* Declaración de Arreglos */
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[6]);
    console.log(diasSemana.length);
    console.log(diasSemana[7]); // dentro de JS el concepto de nulo o inexistencia de un elefemento se conoce como undefined
    //guarda al final del arreglo
    diasSemana.push('DiaExtra');
    console.log(diasSemana);
    //guarda al inicio del arreglo
    diasSemana.unshift('DiaInicio');
    console.log(diasSemana);

    const numerosImpares = [1, 3, 5, 7, 9];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log("Al fin es viernes");
        } else {
            console.log("Aun no es viernes");
        }
    }

    //Manejo de Objetos
    const miEstudiante = {
        nombre: "Christian",
        apellido: "Betancourt",
        edad: 24,
        carrera: "Ingenieria en Sistemas",
        genero: "Masculino",
        ciudadNacimiento: "Quito"
    };
    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);
    if (miEstudiante.edad === 22){
        console.log("Tiene 22 años");
    }else{
        console.log("No tiene 22 años");
    }
    miEstudiante.apellido = "Valencia";
    console.log(miEstudiante);

    //Declaraciones de atributos pero como objetos
    const miProfesor = {
        nombre: "Juan",
        apellido: "Perez",
        edad:null,
        direccion: {
            calle: "Calle 1",
            casa: "120",
            barrio: "La Mariscal"
        }
    }
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = "Calle 10 de Agosto";
    console.log(miProfesor);

    if(miProfesor.edad === miProfesor.estatura){
        console.log("Son iguales");
    }else{
        console.log("No son iguales");
    }

    //Arreglos de Objetos
    const est1 = {
        nombre: "Christian",
        apellido: "Betancourt",
        edad: 24
    }
    const est2 = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 18
    }

    const est3 = {
        nombre: "Maria",
        apellido: "Gomez",
        edad: 39
    }

    const arregloEstudiantes = [est1, est2, est3];
    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstudiantes2 = [
        {
            nombre: "Carlos",
            apellido: "Tobar",
            edad: 24
        },
        {
            nombre: "Anita",
            apellido: "Teran",
            edad: 25
        },
        {
            nombre: "Andrea",
            apellido: "Tituaña",
            edad: 40
        }
    ];
    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);

    //Elimina el ultimo elemento del arreglo (pop)
    const estudiante = arregloEstudiantes2.pop();
    console.log(estudiante);
    console.log(arregloEstudiantes2);

    //Desestructuración de Arreglos
    const colores = ['Amarrillo','Rojo', 'Verde', 'Azul', 'Rosado'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c3);
    console.log(c5);

    const [m1, m2, m3, m4, m5, m6, m7] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
    console.log(m1);
    console.log(m3);
    console.log(m5);
    console.log(m7);

    const [,mes2,,, mes5] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
    console.log(mes2);
    console.log(mes5);

    //Desestructuración de Objetos
    console.log("Desestructuración de Objetos");
    const automovil = {
        marca: "Toyota",
        modelo: "Pruis",
        anio: 2024,
        color: "Blanco"
    }
/*     const {modelo, anio, color,marca} = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color); */
    desestructuracion(automovil);
    const {nombreP, estatura, raza} = {nombreP: "Perro", raza: "Pastor Aleman", estatura: 0.5};
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //Declarar un objeto con un atributo complejo (con un atributo de tipo objeto)
    // y vamos a desestructurar el objeto en especial el atributo de tipo objeto
    const universidad = {
        nombre: "Universidad Central",
        estudiantes: 10000,
        rector:{
            nombreRector: "Luis",
            apellidoRector: "Gomez",
            edad: 50,

        }
    }
/* // En 2 pasos
    const {estudiantes, rector} = universidad;
    const {nombreRector, apellidoRector} = rector;
    console.log(nombreRector) */

    //En un solo paso
    const {estudiantes, rector:{nombreRector, apellidoRector}} = universidad;
    console.log(nombreRector);
    console.log(apellidoRector);



}
const desestructuracion = ({modelo, anio, color,marca}) => {
    console.log("Entro al método Desestructuración de Objetos");
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}