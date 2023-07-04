import cart from './imagenes/carrito.png'
const CardWidget=()=>{ //genero imagen del carrito y un numero fijo 
    return(
        <div>
<img src={cart} alt="carrito" style={{ width: '60px', height: '60px',marginRight: '10px',marginTop: '10px' }} />
        <p>0</p>
        </div>

    )
}
export default CardWidget
