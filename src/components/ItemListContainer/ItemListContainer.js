const ItemListContainer = ({ titulo,precio, img })=>{
    return(
        <div className="card">
        <div className="card-img">
            <figure className="image">
                <img src={img} alt="logo"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <div>Articulo: {titulo} </div>
                <p>El Precio es: $ {precio}</p>
              
            </div>
        </div>          
    </div>

    )
}

export default ItemListContainer