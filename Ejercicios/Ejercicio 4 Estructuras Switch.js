import readline from 'readline-sync'

console.log('=== Sistema de Días y Semáforo ===\n')

const numeroDiaTexto = readline.question('Ingresa un número del 1 al 7 para el día de la semana: ')
const numeroDia = parseInt(numeroDiaTexto)

console.log(`Número ingresado: ${numeroDia}`)

console.log('\n--- Día de la Semana ---')
switch (numeroDia) {
    case 1:
        console.log('Lunes - ¡Inicio de semana!')
        break
    case 2:
        console.log('Martes - ¡Sigamos con energía!')
        break
    case 3:
        console.log('Miércoles - ¡Mitad de semana!')
        break
    case 4:
        console.log('Jueves - ¡Ya casi llegamos!')
        break
    case 5:
        console.log('Viernes - ¡Por fin!')
        break
    case 6:
        console.log('Sábado - ¡Fin de semana!')
        break
    case 7:
        console.log('Domingo - ¡Día de descanso!')
        break
    default:
        console.log('Día inválido. Por favor ingresa un número del 1 al 7.')
}

console.log('\n--- Sistema de Semáforo ---')
const color = readline.question('Ingresa un color del semáforo (verde, amarillo, rojo): ').toLowerCase()

console.log(`Color ingresado: ${color}`)

console.log('\n--- Acción del Semáforo ---')
switch (color) {
    case 'verde':
        console.log('🟢 Puede avanzar - ¡Siga adelante!')
        break
    case 'amarillo':
        console.log('🟡 Pase con precaución - ¡Reduzca la velocidad!')
        break
    case 'rojo':
        console.log('🔴 Deténgase - ¡Alto total!')
        break
    default:
        console.log('❌ Color no válido. Use: verde, amarillo o rojo.')
}

console.log('\n--- Clasificación del Día ---')
switch (numeroDia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Es un día laboral')
        break
    case 6:
    case 7:
        console.log('Es fin de semana')
        break
    default:
        console.log('Día no reconocido')
}

console.log('\n--- Información sobre Switch ---')
console.log('✓ Switch evalúa una expresión y ejecuta el código del case coincidente')
console.log('✓ break; evita que se ejecuten los siguientes cases (fall-through)')
console.log('✓ default se ejecuta cuando ningún case coincide')
console.log('✓ Se pueden agrupar múltiples cases para la misma acción')

console.log('\n--- Switch vs If-Else ---')
console.log('Switch es mejor cuando:')
console.log('• Tienes muchas condiciones de igualdad exacta')
console.log('• Las condiciones son valores discretos (números, strings)')
console.log('• Quieres código más legible para múltiples opciones')

console.log('\nIf-else es mejor cuando:')
console.log('• Necesitas condiciones complejas (rangos, operadores lógicos)')
console.log('• Las condiciones no son de igualdad exacta')
console.log('• Tienes pocas condiciones')

console.log('\n--- Información Técnica ---')
console.log(`Tipo de numeroDia: ${typeof numeroDia}`)
console.log(`Tipo de color: ${typeof color}`)
console.log(`Valor original del color: "${readline.question.lastAnswer || 'N/A'}"`)
console.log(`Valor procesado del color: "${color}"`)