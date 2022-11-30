let n1 = 0
let n2 = 0
let opcion = 0
do {
    opcion = Number(prompt("ingrese una opcion 1:sumar , 2:restar , 3:multiplicar , 4: dividir , 0: salir"))
    console.log(opcion)
    

    switch (opcion) {
        case 1:
            n1 = Number(prompt("ingrese el primer valor"))
            n2 = Number(prompt("ingrese el segundo valor"))
            sumar(n1, n2)
            break;
        case 2:
            n1 = Number(prompt("ingrese el primer valor"))
            n2 = Number(prompt("ingrese el segundo valor"))
            restar(n1, n2)
            break;
        case 3:
            n1 = Number(prompt("ingrese el primer valor"))
            n2 = Number(prompt("ingrese el segundo valor"))
            multiplicacion(n1, n2)
            break;
        case 4:
            n1 = Number(prompt("ingrese el primer valor"))
            n2 = Number(prompt("ingrese el segundo valor"))
            division(n1, n2)
            break;
        case 0:
            alert("Gracias por utilizar nuestra calculadora")
            break;
        default:
            alert("ingrese una opcion valida")
            break;
    }
} while (opcion !== 0);

function sumar(numero1, numero2) {
    let resultado = numero1 + numero2

    return alert(" el resultado es: " + resultado)

}

function restar(numero1, numero2) {
    let resultado = numero1 - numero2

    return alert(" el resultado es: " + resultado)
}

function multiplicacion(numero1, numero2) {
    let resultado = numero1 * numero2

    return alert(" el resultado es: " + resultado)
}

function division(numero1, numero2) {
    if (numero2 !== 0) {
        let resultado = numero1 / numero2

        return alert(" el resultado es: " + resultado)
    } else {
        return alert("No es Posible dividir por 0")
    }
}
