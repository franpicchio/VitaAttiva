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
    const seleccionado = frutosSecos.find(producto => producto.id == idProducto);
    carrito.push(seleccionado);
    carritoUI(carrito);
}

function comprarSuplementos(event) {
    console.log("Se ha agregado un producto al carrito");
    event.preventDefault();
    const idProducto = event.target.id;
    const seleccionado = suplementos.find(producto => producto.id == idProducto);
    carrito.push(seleccionado);
    carritoUI(carrito);
}

function carritoUI(carrito){
    $("#carritoCantidad").html(carrito.length);
    for (const producto of carrito) {
        $("#carritoProductos").append(`<p>${producto.nombre} 
                                        <span class="badge badge-warning">
                                        $${producto.precio}</span></p>`)
    }
}