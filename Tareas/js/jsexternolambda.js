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
    let nombre = "Christian";
    let edad = 24;
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

}