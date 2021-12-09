$.get("data/frutosSecos.json", function(respuesta, estado){
    if(estado == "success"){
        for (const objeto of respuesta) {
            frutosSecos.push(new Producto(objeto.id, objeto.nombre, objeto.precio, objeto.img))
            console.log(objeto);
        }
        productosFrutosSecos(frutosSecos, '#listaFrutosSecos');
        $('.btnFrutosSecos').click(comprarFrutosSecos);
    }
})

$.get("data/suplementos.json", function(respuesta, estado){
    if(estado == "success"){
        for (const objeto of respuesta) {
            suplementos.push(new Producto(objeto.id, objeto.nombre, objeto.precio, objeto.img))
            console.log(objeto);
        }
        productosSuplementos(suplementos, '#listaSuplementos');
        $('.btnSuplementos').click(comprarSuplementos);
    }
})

$('.navbar').fadeIn(500);
$('h1').fadeIn(1000)
$('#imagenHeroe').fadeIn(1500);

$(document).ready(function(){
    $('.vaciarCarrito').click(vaciarCarrito);
})