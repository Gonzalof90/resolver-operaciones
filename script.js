const $primerNumero = document.querySelector("#primerNumero")
const $operacion = document.querySelector("#operacion")
const $segundoNumero = document.querySelector("#segundoNumero")
const $resultado = document.querySelector("#resultado")
const $formulario = document.querySelector("#formulario")
const $valorIngresado = document.querySelector("#valorIngresado")
const $textoPagina = document.querySelector("#textoPagina")
const $respuestasCorrectas = document.querySelector("#respuestasCorrectas")
const $respuestasIncorrectas = document.querySelector("#respuestasIncorrectas")
const $respuestasTotales = document.querySelector("#respuestasTotales")
const correctasTotales = []
 
const numero1 = Math.floor(Math.random() * (100 - 1) + 1)
const numero2 = Math.floor(Math.random() * (100 - 1) + 1)

// para elegir las operaciones
const suma = "+"
const resta = "-"
const multiplicacion = "*"
const division = "/"


const operaciones = [suma,resta,multiplicacion,division]
let operacionSelected = operaciones[Math.floor(Math.random() * (4 - 0) + 0)]

console.log(operacionSelected)



$primerNumero.textContent = numero1
$segundoNumero.textContent = numero2
$operacion.textContent = operacionSelected


switch (operacionSelected){
    case suma:
        resultadoCorrecto = (numero1 + numero2)
        $resultado.textContent = resultadoCorrecto
        console.log("resultado", resultadoCorrecto)
        break;
    case resta:
        resultadoCorrecto = (numero1 - numero2)
        $resultado.textContent = resultadoCorrecto
        console.log("resultado", resultadoCorrecto)
        break;
    case multiplicacion:
        resultadoCorrecto = (numero1 * numero2)
        $resultado.textContent = resultadoCorrecto
        console.log("resultado", resultadoCorrecto)
        break;
    case division:
        resultadoCorrecto = (numero1 / numero2)
        $resultado.textContent = resultadoCorrecto
        console.log("resultado", resultadoCorrecto)
        console.log(typeof(resultadoCorrecto))
        break;
    
}

const guardarCorrectas = (correctasTotales) => {
    const correctasEnJSON = JSON.stringify(correctasTotales)
    const correctasEnLocalStorage = localStorage.setItem("correctas", correctasEnJSON)
}

$formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(typeof(parseInt($valorIngresado.value)))
    if(parseInt($valorIngresado.value) === parseInt(resultadoCorrecto)){
        $textoPagina.textContent = "Bien loco!"
        $textoPagina.style.background = "green"
        console.log("operación exitosa loco!")
        $respuestasCorrectas.textContent ++
        $respuestasTotales.textContent ++
        correctasTotales.push( $respuestasCorrectas)
        console.log(correctasTotales)
        guardarCorrectas(correctasTotales)
        $formulario.reset()
        location.reload()
        cambiar()
    }else if($valorIngresado.value === "") {
        $textoPagina.textContent = "Ingresa al menos un número!, sin miedo..."
        $textoPagina.style.background = "red"
        console.log("ingrese un número al menos sin miedo...")
    }else  {
        console.log("casi....")
        $textoPagina.textContent = "Casi loco!"
        $textoPagina.style.background = "red"
        $respuestasIncorrectas.textContent ++
        $respuestasTotales.textContent ++
        $formulario.reset()
    }
    
})