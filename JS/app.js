console.log('Este es una prueba de JS');

const personas = [
    
];


function mostrarPersonas(){
    let objetos = '';
    for(let persona of personas){
        objetos += `<li> ${persona.nombre} ${persona.apellido}</li>`;       
    }
    document.getElementById('elementos').innerHTML = objetos;
}


function agregarPersona(){
    const formas = document.forms['forma'];
    const nombre = formas['nombre'];
    const apellido = formas['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const objetosValor = new Persona(nombre.value, apellido.value);
        personas.push(objetosValor);
        mostrarPersonas();
    } else {
        document.getElementById('resultado').innerHTML = 'El valor a agregar esta vacio';
    }
}