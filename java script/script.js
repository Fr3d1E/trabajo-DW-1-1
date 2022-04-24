addEventListener('DOMContentLoaded', () =>{
    const boton_arriba = document.querySelector('#boton_arriba')

    const obtener_pixel_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const Arriba = () =>{
        if(obtener_pixel_inicio() > 0){
            requestAnimationFrame(Arriba)
            scrollTo(0, obtener_pixel_inicio() - (obtener_pixel_inicio() / 5))
        }
    }

    const indicarScroll = () => {
        if(obtener_pixel_inicio() > 50){
            boton_arriba.className = 'mostrar'
        } else{
            boton_arriba.className = 'ocultar'
        }
    }

    boton_arriba.addEventListener('click', Arriba)
    window.addEventListener('scroll',  indicarScroll)
})