//objeto y sus propiedades
var propLightbox = {

    imgContainer: document.getElementsByClassName("lightbox")
}

//objeto y sus metodos
var metLightbox = {

    inicio: function(){
        for(var i=0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener("click", metLightbox.capturaImagen);
        }
    },
    capturaImagen: function(){
        
    }
}

metLightbox.inicio();