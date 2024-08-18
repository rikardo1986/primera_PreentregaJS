// Logueo de admin
let user = prompt("Por favor, ingrese el usuario:");

if (user === "admin") {
    alert("Bienvenido Aministrador");

    // Solicitar al usuario que ingrese una opción
    function menuPrincipal() {
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
                menuPrincipal();
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
        menuPrincipal();
    }

    function modificarProducto() {
        let producto = prompt(`Elija el producto que desea modificar:
        1. Notebook
        2. Cámara web
        3. Disco duro
        4. Parlantes
        5. Otro`);

        alert("Producto modificado correctamente: " + producto);
        menuPrincipal();
    }

    function eliminarProducto() {
        let producto = prompt(`Elija el producto que desea eliminar:
        1. Notebook
        2. Cámara web
        3. Disco duro
        4. Parlantes
        5. Otro`);

        alert("Producto eliminado correctamente: " + producto);
        menuPrincipal();
    }

    function exportarDatos() {
        let fecha = prompt("Elija la fecha desde cuando desea descargar un reporte (Formato: DD-MM-AAAA):");

        alert("Datos exportados desde la fecha: " + fecha);
        menuPrincipal();
    }

    menuPrincipal();

} else {
    alert("Usuario de Aministrador incorrecto");
}
