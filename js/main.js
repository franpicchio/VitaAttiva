$.get("data/frutosSecos.json", function(respuesta, estado){
    if(estado == "success"){
        for (const objeto of respuesta) {
            frutosSecos.push(new Producto(objeto.id, objeto.nombre, objeto.precio, objeto.img))
            console.log(objeto);
        }
        productosFrutosSecos(frutosSecos, '#listaFrutosSecos');
    }
})

$.get("data/suplementos.json", function(respuesta, estado){
    if(estado == "success"){
        for (const objeto of respuesta) {
            suplementos.push(new Producto(objeto.id, objeto.nombre, objeto.precio, objeto.img))
            console.log(objeto);
        }
        productosSuplementos(suplementos, '#listaSuplementos');
    }
})

$('.navbar').fadeIn(500);
$('h1').fadeIn(1000)
$('#imagenHeroe').fadeIn(1500);

let botonesFrutosSecos = $('.btnFrutosSecos');
for (const boton of botonesFrutosSecos) {
    boton.onclick = (e) = comprarFrutosSecos(e);
}

let botonesSuplementos = $('.btnSuplementos');
for (const boton of botonesSuplementos) {
    boton.onclick = (e) = comprarSuplementos(e);
}