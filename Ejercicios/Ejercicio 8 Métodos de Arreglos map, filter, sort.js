const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
];

const productosConIVA = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio,
        precioConIVA: producto.precio * 1.12
    };
});

console.log("Con IVA:");
console.log(productosConIVA);

const productosFiltrados = productosConIVA.filter(producto => producto.precioConIVA >= 100);

console.log("\nFiltrados (precio con IVA >= 100):");
console.log(productosFiltrados);

const productosOrdenados = [...productosConIVA].sort((a, b) => a.precioConIVA - b.precioConIVA);

console.log("\nOrdenados (por precio con IVA de menor a mayor):");
console.log(productosOrdenados);