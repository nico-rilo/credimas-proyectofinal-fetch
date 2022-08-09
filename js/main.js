let formulario = document.getElementById("formulario");
let inversion = document.getElementById("inversion");
let boton = document.getElementById("calcular");
let contenedor = document.getElementById("contenedor");
let rangoInversion;

let precio = 0;
const intereses = [1.1, 1.2, 1.3, 1.4, 1.5];


const PlazosFijos = JSON.parse(localStorage.getItem("plazosFijos")) || [];

class plazoFijoUsuario {
    constructor(monto, interes) {
        this.monto = monto;
        this.interes = interes;
        this.deposito = this.monto * this.interes;
    }
}

const validarCampos = () => {
    if (!inversion.value) {
        alert("Debe llenar el campo con números");
        return false;
    } else {
        return true;
    };
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
    e.preventDefault()
    if (validarCampos()) {
        crearTarjeta()
    };
});



let contenedorPlazos = document.getElementById("contenedorPlazos");
let btnHistorial = document.getElementById("verHistorial");
let totalizador = document.getElementById("totalizador");

const verHistorial = () => {
    contenedorPlazos.innerHTML = "";
    PlazosFijos.forEach((plazo) => {
        contenedorPlazos.innerHTML += `<li> Tenés un plazo de ${plazo.monto}, que se convertiran en ${plazo.deposito}.<li>`;
    });
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
})



const titulo = (document.querySelector("h1").textContent = "CREDIMAS, es mejor.");
const subTitulo = (document.querySelector(".text-white-50").textContent = "Happiness is a warm gun");
const titulo2 = (document.querySelector("h2").textContent = "Alli y para siempre aprendimos que ciertos fuegos no se encienden frotando dos palitos ni se apagan con solo soplar");
const descripcion = (document.querySelector(".lead").textContent = "Cuando el carro anda, los melones se acomodan");

const enlace = document.querySelector(".navbar-brand");
enlace.remove()

let agregado = document.createElement("p");
agregado.innerHTML = "<h5>Parrafos Agregados</h5>";

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