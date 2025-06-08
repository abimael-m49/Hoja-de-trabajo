import readline from 'readline-sync'

console.log('=== Sistema de Temporizador y Menú Interactivo === \n')

function pausa(segundos) {

    console.log(`Pausando ${segundos} segundo(s)...`)
}


const segundosTexto = readline.question('¿Cuántos segundos quieres temporizar? ')
const segundosTotales = parseInt(segundosTexto)


if (segundosTotales <= 0 || isNaN(segundosTotales)) {
    console.log('❌ Por favor ingresa un número válido mayor a 0')
} else {
    console.log(`\n Iniciando temporizador de ${segundosTotales} segundos...\n`)
    

    let segundosRestantes = segundosTotales
    
    while (segundosRestantes > 0) {
        if (segundosRestantes === 1) {
            console.log(`Falta ${segundosRestantes} segundo`)
        } else {
            console.log(`Faltan ${segundosRestantes} segundos`)
        }
        

        pausa(1)
        segundosRestantes--
    }
    
    console.log('¡El tiempo finalizó!\n')
}


console.log('--- Menú Interactivo ---')

let opcion
let contador = 0

do {
    contador++
    console.log(`\n📋 Menú Principal (Intento #${contador})`)
    console.log('┌─────────────────────────────┐')
    console.log('│  1. Saludar                 │')
    console.log('│  2. Mostrar hora actual     │')
    console.log('│  3. Salir                   │')
    console.log('└─────────────────────────────┘')
    
    const opcionTexto = readline.question('Selecciona una opción (1-3): ')
    opcion = parseInt(opcionTexto)
    
    switch (opcion) {
        case 1:
            console.log('¡Hola! ¡Que tengas un excelente día!')
            console.log('Gracias por usar nuestro sistema')
            break
            
        case 2:
            const fechaActual = new Date()
            const hora = fechaActual.toLocaleTimeString('es-GT', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })
            const fecha = fechaActual.toLocaleDateString('es-GT', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            console.log(`Hora actual: ${hora}`)
            console.log(`Fecha actual: ${fecha}`)
            break
            
        case 3:
            console.log('¡Hasta luego! Gracias por usar el programa')
            console.log('Saliendo del sistema...')
            break
            
        default:
            console.log('❌ Opción no válida. Por favor selecciona 1, 2 o 3.')
            // La opción se mantiene diferente de 3 para continuar el ciclo
            break
    }
    
    // Solo pausar si no es la opción de salir
    if (opcion !== 3) {
        console.log('\n⏸ Presiona Enter para continuar...')
        readline.question('')
    }
    
} while (opcion !== 3)

console.log('\n--- Información sobre Ciclos ---')
console.log('✅ While: Se ejecuta mientras la condición sea verdadera')
console.log('✅ Do-While: Se ejecuta al menos una vez, luego verifica la condición')
console.log(`✅ El temporizador se ejecutó ${segundosTotales} veces (while)`)
console.log(`✅ El menú se mostró ${contador} veces (do-while)`)

console.log('\n--- Diferencias Clave ---')
console.log('While:')
console.log('• Verifica condición ANTES de ejecutar')
console.log('• Puede no ejecutarse nunca si la condición es falsa')
console.log('• Ideal para conteos regresivos y validaciones')

console.log('\nDo-While:')
console.log('• Verifica condición DESPUÉS de ejecutar')
console.log('• Se ejecuta AL MENOS una vez')
console.log('• Ideal para menús y interfaces que deben mostrarse mínimo una vez')

console.log('\n--- Casos de Uso Comunes ---')
console.log('While se usa para:')
console.log('• Temporizadores y contadores')
console.log('• Lectura de archivos')
console.log('• Validación de entrada')
console.log('• Procesamiento de datos')

console.log('\nDo-While se usa para:')
console.log('• Menús interactivos')
console.log('• Juegos (ejecutar al menos una ronda)')
console.log('• Interfaces que requieren al menos una ejecución')
console.log('• Confirmaciones de usuario')

console.log('\n ¡Ejercicio completado exitosamente!')