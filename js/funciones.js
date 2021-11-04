function productosFrutosSecos (frutosSecos, id){
    $(id).empty();
    for(const producto of frutosSecos){
        $(id).append(`<article style="width: 25rem;"><div class="card" style="width: 18rem;">
                                    <img src="${producto.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h3 class="card-title">${producto.nombre}</h3>
                                        <p class="card-text">Precio:$${producto.precio}</p>
                                        <button id="${producto.id}" class ="btnFrutosSecos btn">Agregar al carrito</button>
                                    </div>
                                </div></article>`);
    }
}

function productosSuplementos (suplementos, id){
    $(id).empty();
    for(const producto of suplementos){
        $(id).append(`<article style="width: 25rem;"><div class="card" style="width: 18rem;">
                                    <img src="${producto.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h3 class="card-title">${producto.nombre}</h3>
                                        <p class="card-text">Precio:$${producto.precio}</p>
                                        <button id="${producto.id}" class ="btnSuplementos btn">Agregar al carrito</button>
                                    </div>
                                </div></article>`);
    }
}

function comprarFrutosSecos(event) {
    console.log("Se ha agregado un producto al carrito");
    event.preventDefault();
    const idProducto = event.target.id;
    const existe = carrito.find(producto => producto.id == idProducto);
    if(existe == undefined){
        const seleccionado = frutosSecos.find(producto => producto.id == idProducto);
        carrito.push(seleccionado);
    }else{
        existe.agregarCantidad(1);
    }
    carritoUI(carrito);
}

function comprarSuplementos(event) {
    console.log("Se ha agregado un producto al carrito");
    event.preventDefault();
    const idProducto = event.target.id;
    const existe = carrito.find(producto => producto.id == idProducto);
    if(existe == undefined){
        const seleccionado = suplementos.find(producto => producto.id == idProducto);
        carrito.push(seleccionado);
    }else{
        existe.agregarCantidad(1);
    }
    carritoUI(carrito);
}

function carritoUI(carrito){
    $("#carritoCantidad").html(carrito.length);
    $('#carritoProductos').empty();
    for (const producto of carrito) {
        $("#carritoProductos").append(`<p>${producto.nombre} 
                                        <span class="badge">
                                        x${producto.cantidad}</span>
                                        </p>`)                
    }
    const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};
    guardarLocal('listaProductos', JSON.stringify(carrito));
}

function tablaCarrito() {
    $('#tablaCarrito').empty();
    const almacenados = JSON.parse(localStorage.getItem('listaProductos'));
    for (const objeto of almacenados) {
        carrito.push(objeto);
    }
    for (const producto of carrito) {
        $('#tablaCarrito').append(`<tr><th>${producto.nombre}</th>
                                    <th>${producto.precio}</th>
                                    <th>${producto.cantidad}</th></tr>`)
    }
    carritoUI(carrito);
}
tablaCarrito(carrito);

function vaciarCarrito() {
    localStorage.clear();
    location.reload();
}