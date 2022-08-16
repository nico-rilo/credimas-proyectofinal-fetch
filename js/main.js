let formulario = document.getElementById("formulario");
let inversion = document.getElementById("inversion");
let boton = document.getElementById("calcular");
let contenedor = document.getElementById("contenedor");
let rangoInversion

let precio = 0;
const intereses = [1.1, 1.2, 1.3, 1.4, 1.5]

let PlazosFijos = JSON.parse(localStorage.getItem("plazosFijos")) || []; 

class plazoFijoUsuario {
    constructor(monto, interes) {
        this.monto = monto,
        this.interes = interes,
        this.deposito = this.monto * this.interes
    }
}

const crearTarjeta = () => {

        inversionIngresada = parseInt(inversion.value)

    if (inversionIngresada <= 1000) {
        rangoInversion = ("Depositando ese monto tenés el 10% de interés anual, por lo tanto tu depósito se convertirá en " + "$" + inversionIngresada * intereses[0]);
        PlazosFijos.push(new plazoFijoUsuario(inversionIngresada, intereses[0]));

    } else if (inversionIngresada <= 2000) {
        rangoInversion = ("Depositando ese monto tenés el 20% de interés anual, por lo tanto tu depósito se convertirá en " + "$" + inversionIngresada * intereses[1]);
        PlazosFijos.push(new plazoFijoUsuario(inversionIngresada, intereses[1]));

    } else if (inversionIngresada <= 3000) {
        rangoInversion = ("Depositando ese monto tenés el 30% de interés anual, por lo tanto tu depósito se convertirá en " + "$" + inversionIngresada * intereses[2]);
        PlazosFijos.push(new plazoFijoUsuario(inversionIngresada, intereses[2]));

    } else if (inversionIngresada <= 4000) {
        rangoInversion = ("Depositando ese monto tenés el 40% de interés anual, por lo tanto tu depósito se convertirá en " + "$" + inversionIngresada * intereses[3]);
        PlazosFijos.push(new plazoFijoUsuario(inversionIngresada, intereses[3]));

    } else {
        rangoInversion = ("Depositando ese monto tenés el 50% de interés anual, por lo tanto tu depósito se convertirá en " + "$" + inversionIngresada * intereses[4]);
        PlazosFijos.push(new plazoFijoUsuario(inversionIngresada, intereses[4]));
    }

    console.log (inversionIngresada?.a || "el interés no existe")

    localStorage.setItem("plazosFijos", JSON.stringify(PlazosFijos));

    contenedor.innerHTML = `<div class="card col-4 mx-1 p-3">
                                <h3> Tu inversión es de ${inversionIngresada}.</h3>
                                <p> ${rangoInversion}.</p>
                            </div>`;

    formulario.reset();

}

boton.addEventListener("click", (e) => {
    e.preventDefault();    
        crearTarjeta();
   
});

let contenedorPlazos = document.getElementById("contenedorPlazos");
let btnHistorial = document.getElementById("verHistorial");
let totalizador = document.getElementById("totalizador");

const verHistorial = () => {
    contenedorPlazos.innerHTML = "";
    PlazosFijos.forEach((plazo) => {
        contenedorPlazos.innerHTML += `<li> Tenés un plazo de ${plazo.monto}, que se convertiran en ${plazo.deposito}.<li>`;
    })
};

const mostrarTotal = () => {
    let inversionTotal = PlazosFijos.reduce((acc, plazo) => acc + plazo.monto, 0);
    let depositoTotal = PlazosFijos.reduce((acc, plazo) => acc + plazo.deposito, 0);
    let gananciaTotal = depositoTotal - inversionTotal;

    console.log(PlazosFijos);
    totalizador.innerHTML = `El total invertido es de <strong>${inversionTotal}</strong>, recibiendo un total de <strong>${depositoTotal}</strong>, para una ganancia de <strong>${gananciaTotal}</strong>.`
};

btnHistorial.addEventListener("click", () => {
    verHistorial();
    mostrarTotal();
    5
})

function borrarHistorial() {

    localStorage.removeItem("plazosFijos");
    PlazosFijos.length = 0;
}

const btnBorrarHistorial = document.getElementById("borrarHistorial");
btnBorrarHistorial.addEventListener('click', (event) => {

    event.preventDefault();
    borrarHistorial();
    verHistorial();
    mostrarTotal();
    
    contenedor.innerHTML = `<div class="card col-4 mx-1 p-3">
                                <h3> Gracias por utilizar nuestro simulador </h3>
                                <p>Esperamos tu inversión!!</p>
                            </div>`;

    formulario.reset();
    Swal.fire({
        title: 'VAMOOOO METÉLE PESOS ARGENTOS!!!!',
        text: 'Muerte al dolar yankeeee',
        imageUrl: 'http://c.files.bbci.co.uk/6AD9/production/_103735372_gettyimages-175494583.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Dolar quemado',
      })
    
});

const plazoFijoBanco = {
    cliente: "Alberto",
    cuentas: {
        ctaCorriente: 0203,
        cajaAhorroEnPesos: 5555,
        cahaAhorroenDolares: 2258,
    }

}

console.log (plazoFijoBanco?.cuentas?.cajaAhorroEnPesos || "Esa cuenta no existe")

console.log (plazoFijoBanco?.cuentas?.cajaDeSeguridad || "Esa cuenta no existe") 

const plazoFijoBancoR = {
    cliente: "Alberto",
    cuentas: {
        ctaCorriente: 3245,
        cajaAhorroEnPesos: 5555,
        cahaAhorroenDolares: 2258,
    }

}

const { cliente, cuentas} = plazoFijoBancoR

console.log (cliente) 
console.log (cuentas) 

const plazoFijoLaucha = {
    cliente: "Alberto",
    cuentas: {
        ctaCorriente: 3245,
        cajaAhorroEnPesos: 5555,
        cahaAhorroenDolares: 2258,
    }

}

const plazoFijoLaucha2 = {
    ...plazoFijoLaucha
}

console.log (plazoFijoLaucha2) 

const titulo = (document.querySelector("h1").textContent = "Banco LAUCHISMO");
const subTitulo = (document.querySelector(".text-white-50").textContent = "Entre la espada y la pared, siempre");
const titulo2 = (document.querySelector("h2").textContent = "Somos los mas delincuentes del mercado");
const descripcion = (document.querySelector(".lead").textContent = "Estamos para defondar tus ahorros y hacerte creer que ganarás dinero con nosotros");

const enlace = document.querySelector(".navbar-brand");
enlace.remove()

let agregado = document.createElement("p");
agregado.innerHTML = "<h5>Parrafo agregados</h5>";

const encabezado = document.querySelector(".encabezado");
console.log(encabezado.children)

encabezado.insertBefore(agregado, encabezado[1]);

let listaVacia = document.querySelector("#listaVacia");

let otrosServicios = ["Dólares", "Bonos", "Caja de seguridad"];

for (let servicio of otrosServicios) {
    let listado = document.createElement("li");
    listado.innerHTML = servicio;
    listaVacia.appendChild(listado);
}


