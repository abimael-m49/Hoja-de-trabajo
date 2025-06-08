import readline from 'readline-sync'

const precioTexto = readline.question('Ingresa el precio del producto: Q')
const descuentoTexto = readline.question('Ingresa el porcentaje de descuento: ')

const precio = parseFloat(precioTexto)
const descuento = parseFloat(descuentoTexto)
const montoDescuento = precio * (descuento / 100)
const total = precio - montoDescuento

console.log(`El precio original es: Q${precio}`)
console.log(`El descuento aplicado es: ${descuento}% (Q${montoDescuento.toFixed(2)})`)
console.log(`El precio final con descuento es: Q${total.toFixed(2)}`)

console.log('\n--- Verificación para juego mecánico ---')

const estaturaTexto = readline.question('Ingresa tu estatura en centímetros: ')
const estatura = parseInt(estaturaTexto)

const estaturaMinima = 120
const estaturaMaxima = 200
const puedeSubirse = estatura >= estaturaMinima && estatura <= estaturaMaxima

if (puedeSubirse) {
    console.log(`✅ ¡Perfecto! Con ${estatura} cm puedes subir al juego mecánico.`)
} else {
    if (estatura < estaturaMinima) {
        console.log(`❌ Lo siento, con ${estatura} cm eres muy bajo/a. La estatura mínima es ${estaturaMinima} cm.`)
    } else {
        console.log(`❌ Lo siento, con ${estatura} cm eres muy alto/a. La estatura máxima es ${estaturaMaxima} cm.`)
    }
}

console.log('\n--- Información sobre operadores utilizados ---')
console.log(`Operadores aritméticos: *, /, -, +`)
console.log(`Operadores de comparación: >=, <=`)
console.log(`Operador lógico: && (AND)`)
console.log(`Tipo de estatura: ${typeof estatura}`)
console.log(`Tipo de precio: ${typeof precio}`)
console.log(`Resultado de la evaluación: ${typeof puedeSubirse}`)