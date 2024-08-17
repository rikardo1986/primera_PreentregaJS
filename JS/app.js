// Saludo de bienvenida al usuario
let username = prompt("Por favor, ingresa tu nombre de usuario:");
let password = prompt("Por favor, ingresa tu contraseña:");

if (username && password) {
    alert("¡Bienvenido, " + username + "!");
} else {
    alert("Debes ingresar tanto el nombre de usuario como la contraseña.");
}

// Solicitar al usuario que ingrese una opción
function mostrarMenuPrincipal() {
    let actividad = prompt(`Ingrese la actividad a realizar:
    1. Agregar nuevo producto
    2. Modificar producto
    3. Eliminar producto
    4. Exportar datos del inventario`);

    switch (actividad) {
        case '1':
            agregarProducto();
            break;
        case '2':
            modificarProducto();
            break;
        case '3':
            eliminarProducto();
            break;
        case '4':
            exportarDatos();
            break;
        default:
            alert("Opción no válida");
            mostrarMenuPrincipal();
    }
}

function agregarProducto() {
    let producto = prompt(`Elija el producto que desea agregar:
    1. Notebook
    2. Cámara web
    3. Disco duro
    4. Parlantes
    5. Otro`);

    alert("Producto agregado correctamente: " + producto);
    mostrarMenuPrincipal();
}

function modificarProducto() {
let actividad = prompt(`Ingrese la actividad a realizar:
    1. Agregar nuevo producto
    2. Modificar producto
    3. Eliminar producto
    4. Exportar datos del inventario`);

    alert("Producto modificado correctamente: " + producto);
    mostrarMenuPrincipal();
}

function eliminarProducto() {
    let producto = prompt(`Elija el producto que desea eliminar:
    1. Notebook
    2. Cámara web
    3. Disco duro
    4. Parlantes
    5. Otro`);

    alert("Producto eliminado correctamente: " + producto);
    mostrarMenuPrincipal();
}

function exportarDatos() {
    let fecha = prompt("Elija la fecha desde cuando desea descargar un reporte (Formato: DD-MM-AAAA):");

    alert("Datos exportados desde la fecha: " + fecha);
    mostrarMenuPrincipal();
}

mostrarMenuPrincipal();
