import readline from 'readline-sync'

console.log('=== Sistema de Geometría === 📐\n')


function calcularAreaTriangulo(base, altura) {

    if (base <= 0 || altura <= 0) {
        return null 
    }
    

    const area = (base * altura) / 2
    return area
}


function mostrarSaludo(nombre) {
    console.log(` Hola, ${nombre}. Bienvenido al sistema de geometría`)
    console.log(' Aquí podrás calcular el área de triángulos')
}

function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function mostrarInformacionTriangulo(base, altura, area, nombre) {
    console.log('\n === Reporte del Triángulo ===')
    console.log(` Calculado por: ${nombre}`)
    console.log(` Base: ${base} unidades`)
    console.log(` Altura: ${altura} unidades`)
    console.log(` Área: ${area} unidades cuadradas`)
    console.log(` Fórmula utilizada: (${base} × ${altura}) ÷ 2 = ${area}`)
}


function saludarPersonalizado(nombre, titulo = 'Usuario') {
    return `¡Hola ${titulo} ${nombre}! `
}


function ejecutarCalculo(funcionCalculo, valor1, valor2, nombreOperacion) {
    console.log(`🔄 Ejecutando ${nombreOperacion}...`)
    const resultado = funcionCalculo(valor1, valor2)
    console.log(` Resultado de ${nombreOperacion}: ${resultado}`)
    return resultado
}




console.log('--- Entrada de Datos ---')


const nombre = readline.question(' Ingresa tu nombre: ')
const baseTexto = readline.question(' Ingresa la base del triángulo: ')
const alturaTexto = readline.question(' Ingresa la altura del triángulo: ')


const base = parseFloat(baseTexto)
const altura = parseFloat(alturaTexto)

console.log('\n--- Procesamiento ---')


mostrarSaludo(nombre)


if (isNaN(base) || isNaN(altura)) {
    console.log('❌ Error: Por favor ingresa números válidos')
} else {

    const area = calcularAreaTriangulo(base, altura)
    
    if (area === null) {
        console.log('❌ Error: La base y altura deben ser números positivos')
    } else {

        console.log(`\n El área del triángulo es: ${area}`)
        

        mostrarInformacionTriangulo(base, altura, area, nombre)
        

        console.log('\n--- Demostraciones Adicionales ---')
        

        console.log(saludarPersonalizado(nombre))
        console.log(saludarPersonalizado(nombre, 'Ingeniero/a'))
        

        ejecutarCalculo(calcularAreaTriangulo, base, altura, 'cálculo de área')
        

        const duplicarArea = (area) => area * 2
        console.log(` Área duplicada: ${duplicarArea(area)}`)
        

        const areaEnMetros = (function(areaEnUnidades) {
            return areaEnUnidades / 10000 
        })(area)
        console.log(`Área en metros cuadrados: ${areaEnMetros.toFixed(6)} m²`)
    }
}




console.log('\n--- Información sobre Funciones ---')
console.log('Tipos de funciones demostradas:')
console.log('Función con retorno: calcularAreaTriangulo()')
console.log(' Procedimiento sin retorno: mostrarSaludo()')
console.log('Función con parámetros por defecto: saludarPersonalizado()')
console.log('Función callback: ejecutarCalculo()')
console.log('Arrow function: duplicarArea()')
console.log('Función anónima: conversión de unidades')

console.log('\n Diferencias clave:')
console.log('FUNCIÓN (con return):')
console.log('• Retorna un valor que puede ser usado')
console.log('• Se puede asignar a una variable')
console.log('• Ejemplo: const resultado = calcularAreaTriangulo(10, 5)')

console.log('\nPROCEDIMIENTO (sin return):')
console.log('• No retorna valor (o retorna undefined)')
console.log('• Se ejecuta por sus efectos secundarios')
console.log('• Ejemplo: mostrarSaludo("Ana") // Solo muestra mensaje')

console.log('\n Ventajas de usar funciones:')
console.log('• Reutilización de código')
console.log('• Modularidad y organización')
console.log('• Facilita debugging y mantenimiento')
console.log('• Permite testing individual')
console.log('• Código más legible y comprensible')

console.log('\n--- Demostración de Scope ---')
let variableGlobal = 'Soy global'

function demostracionScope() {
    let variableLocal = 'Soy local'
    console.log(`Dentro de función - Global: ${variableGlobal}`)
    console.log(`Dentro de función - Local: ${variableLocal}`)
}

demostracionScope()
console.log(`Fuera de función - Global: ${variableGlobal}`)

console.log('\n ¡Programa de funciones completado exitosamente!')