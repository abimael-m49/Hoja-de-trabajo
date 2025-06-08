import readline from 'readline-sync'

console.log('=== Calculadora de Edad y Calificaciones ===\n')

const fechaNacimientoTexto = readline.question('Ingresa tu fecha de nacimiento (YYYY-MM-DD): ')
const fechaNacimiento = new Date(fechaNacimientoTexto)
const anioNacimiento = fechaNacimiento.getFullYear()
const anioActual = new Date().getFullYear()
const edad = anioActual - anioNacimiento

console.log(`\nFecha de nacimiento: ${fechaNacimientoTexto}`)
console.log(`Edad calculada: ${edad} años`)

console.log('\n--- Clasificación por Edad ---')
if (edad < 12) {
    console.log('Eres un niño')
} else if (edad >= 12 && edad <= 17) {
    console.log('Eres un adolescente')
} else if (edad >= 18 && edad <= 64) {
    console.log(' Eres un adulto')
} else {
    console.log('Eres un adulto mayor')
}

console.log('\n--- Evaluación de Calificaciones ---')
const notaTexto = readline.question('Ingresa tu nota del examen (0-100): ')
const nota = parseInt(notaTexto)

if (nota < 0 || nota > 100) {
    console.log('Error: La nota debe estar entre 0 y 100')
} else {
    console.log(`Nota ingresada: ${nota}`)
    
    let calificacion
    let mensaje
    
    if (nota >= 90) {
        calificacion = 'A'
        mensaje = '¡Excelente trabajo!'
    } else if (nota >= 80) {
        calificacion = 'B'
        mensaje = '¡Muy buen trabajo!'
    } else if (nota >= 70) {
        calificacion = 'C'
        mensaje = 'Buen trabajo'
    } else if (nota >= 60) {
        calificacion = 'D'
        mensaje = 'Necesitas mejorar'
    } else {
        calificacion = 'F'
        mensaje = 'Necesitas estudiar más'
    }
    
    console.log(`Tu calificación es: ${calificacion}`)
    console.log(mensaje)
}

console.log('\n--- Resumen de Condicionales Utilizados ---')
console.log('✓ if simple para validar rango de nota')
console.log('✓ if-else if-else para clasificar edad')
console.log('✓ if-else if-else para asignar calificaciones')
console.log('✓ Operadores de comparación: <, >=, <=, &&, ||')

console.log('\n--- Información Técnica ---')
console.log(`Tipo de edad: ${typeof edad}`)
console.log(`Tipo de nota: ${typeof nota}`)
console.log(`Año actual: ${anioActual}`)
console.log(`Año de nacimiento: ${anioNacimiento}`)