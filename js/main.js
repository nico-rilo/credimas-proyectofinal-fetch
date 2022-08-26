let formulario = document.getElementById("formulario");
let inversion = document.getElementById("inversion");
let boton = document.getElementById("calcular");
let contenedor = document.getElementById("contenedor");
let rangoInversion

let precio = 0;
const intereses = [1.1, 1.2, 1.3, 1.4, 1.5];

let PlazosFijos = JSON.parse(localStorage.getItem("plazosFijos")) || []; 

class plazoFijoUsuario {
    constructor(monto, interes) {
        this.monto = monto,
        this.interes = interes,
        this.deposito = this.monto * this.interes;
    }
}

const crearTarjeta = () => {

        inversionIngresada = parseInt(inversion.value);

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

    totalizador.innerHTML = `El total invertido es de <strong>${inversionTotal}</strong>, recibiendo un total de <strong>${depositoTotal}</strong>, para una ganancia de <strong>${gananciaTotal}</strong>.`;
};

btnHistorial.addEventListener("click", () => {
    verHistorial();
    mostrarTotal();
    5;
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
        text: 'Que nosotrooo nos quemamo los verdeeee',
        imageUrl: 'http://c.files.bbci.co.uk/6AD9/production/_103735372_gettyimages-175494583.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Dolar quemado',
})
    
});

const cotizacionDolar = () => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
        .then((response) => response.json())
        .then(informacion => {
            let acumulador = ``;
            for (const monedas in informacion) {
                if (monedas === "last_update") {
                    continue
                }
                acumulador += `<div class="card">
    <h4>${monedas}</h4>
    <h6>Precio Venta: ${informacion[monedas].value_sell}</h6>
    <h6>Precio Compra: ${informacion[monedas].value_buy}</h6>
    </div>`;
} 
})       
}

cotizacionDolar();

const titulo = (document.querySelector("h1").textContent = "CREDIMAS");
const subTitulo = (document.querySelector(".text-white-50").textContent = "ES MEJOR.");
const titulo2 = (document.querySelector("h2").textContent = "Happiness is a warm gun");
const descripcion = (document.querySelector(".lead").textContent = "Alli y para siempre aprendimos que ciertos fuegos no se encienden frotando dos palitos ni se apagan con solo soplar");

const enlace = document.querySelector(".navbar-brand");
enlace.remove();