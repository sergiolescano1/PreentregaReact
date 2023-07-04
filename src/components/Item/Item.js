import './Item'
import React from 'react';
import { Link  } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({ id, name, price, stock,url }) => {
  return (
    <article>
      <div className="card has-background-black">
      <div className="is-size-4">Articulo: {name} </div>
        <div className="card-img">
        <figure className="image" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
            <img src={url} alt="logo" style={{ width: '100%', height: '100%' }} />
          </figure>
        </div>
        <div className="card-content">
        <div className="media-content">
        <p>El Precio es: $ {price}</p>
        <Link to = {`/item/${id}`} >ver detalle</Link>
        <ItemCount initial={1} stock={stock} onAdd= {(quantity) => console.log ('cant', quantity)}/>              
        </div>
        <button className="button is-warning"> fasf</button>

        </div>          
    </div>
    </article>
  );
  };

export default Item;

