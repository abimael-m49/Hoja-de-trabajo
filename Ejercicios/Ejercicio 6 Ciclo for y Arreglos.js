console.log('=== Sistema de Gestión de Estudiantes === \n')

const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
const notas = [70, 85, 55, 90, 60]

console.log('--- Información de los Arreglos ---')
console.log(`Total de estudiantes: ${estudiantes.length}`)
console.log(`Total de notas: ${notas.length}`)
console.log(`Estudiantes: ${estudiantes.join(', ')}`)
console.log(`Notas: ${notas.join(', ')}\n`)

function determinarGenero(nombre) {
    return nombre.toLowerCase().endsWith('a') ? 'femenino' : 'masculino'
}

console.log('--- Saludos Personalizados ---')
for (let i = 0; i < estudiantes.length; i++) {
    const nombre = estudiantes[i]
    const genero = determinarGenero(nombre)
    
    if (genero === 'femenino') {
        console.log(`Bienvenida, ${nombre}`)
    } else {
        console.log(`Bienvenido, ${nombre}`)
    }
}

console.log('\n--- Información Detallada de Estudiantes ---')
for (let i = 0; i < estudiantes.length; i++) {
    const nombre = estudiantes[i]
    const nota = notas[i]
    const genero = determinarGenero(nombre)
    
    let estado = ''
    let emoji = ''
    
    if (nota >= 90) {
        estado = 'Excelente'
        emoji = '🌟'
    } else if (nota >= 80) {
        estado = 'Muy bueno'
        emoji = '👍'
    } else if (nota >= 70) {
        estado = 'Bueno'
        emoji = '✅'
    } else if (nota >= 60) {
        estado = 'Regular'
        emoji = '⚠️'
    } else {
        estado = 'Necesita mejorar'
        emoji = '❌'
    }
    
    console.log(`${emoji} ${nombre} (${genero}): ${nota} puntos - ${estado}`)
}

console.log('\n--- Cálculo del Promedio ---')
let suma = 0

for (let i = 0; i < notas.length; i++) {
    suma += notas[i]
    console.log(`Sumando nota ${i + 1}: ${notas[i]} (Total acumulado: ${suma})`)
}

const promedio = suma / notas.length
console.log(`\n Suma total: ${suma}`)
console.log(`Cantidad de estudiantes: ${notas.length}`)
console.log(`El promedio del grupo es: ${promedio.toFixed(1)}`)

console.log('\n--- Análisis del Rendimiento ---')
let excelentes = 0
let aprobados = 0
let reprobados = 0

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 90) {
        excelentes++
    } else if (notas[i] >= 60) {
        aprobados++
    } else {
        reprobados++
    }
}

console.log(`🌟 Estudiantes excelentes (90+): ${excelentes}`)
console.log(`✅ Estudiantes aprobados (60-89): ${aprobados}`)
console.log(`❌ Estudiantes reprobados (<60): ${reprobados}`)

let notaMaxima = notas[0]
let notaMinima = notas[0]
let estudianteMaximo = estudiantes[0]
let estudianteMinimo = estudiantes[0]

for (let i = 1; i < notas.length; i++) {
    if (notas[i] > notaMaxima) {
        notaMaxima = notas[i]
        estudianteMaximo = estudiantes[i]
    }
    if (notas[i] < notaMinima) {
        notaMinima = notas[i]
        estudianteMinimo = estudiantes[i]
    }
}

console.log(`\n Mejor nota: ${estudianteMaximo} con ${notaMaxima} puntos`)
console.log(` Nota más baja: ${estudianteMinimo} con ${notaMinima} puntos`)

console.log('\n--- Tipos de Ciclos For ---')

console.log('For tradicional:')
for (let i = 0; i < 3; i++) {
    console.log(`  Iteración ${i + 1}`)
}

console.log('\n For...of (valores):')
for (const estudiante of estudiantes) {
    console.log(`  Estudiante: ${estudiante}`)
}

console.log('\n For...in (índices):')
for (const indice in estudiantes) {
    console.log(`  Índice ${indice}: ${estudiantes[indice]}`)
}

console.log('\n--- Información Educativa ---')
console.log('Conceptos utilizados:')
console.log('• Arreglos (arrays) para almacenar múltiples valores')
console.log('• Ciclo for tradicional con contador')
console.log('• Acceso a elementos por índice: array[i]')
console.log('• Propiedad .length para obtener el tamaño')
console.log('• Métodos .join(), .toLowerCase(), .endsWith()')

console.log('\nVentajas del ciclo for:')
console.log('• Control total sobre el índice')
console.log('• Acceso simultáneo a múltiples arreglos')
console.log('• Flexibilidad en el incremento/decremento')
console.log('• Ideal para cálculos que requieren posición')

console.log('\n Estadísticas finales:')
console.log(`• Total de elementos procesados: ${estudiantes.length}`)
console.log(`• Operaciones matemáticas realizadas: ${notas.length + 1}`)
console.log(`• Promedio calculado: ${promedio.toFixed(2)}`)
console.log(`• Porcentaje de aprobación: ${((aprobados + excelentes) / notas.length * 100).toFixed(1)}%`)

console.log('\n ¡Análisis completado exitosamente!')