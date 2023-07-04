import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
const{itemId}=useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]); 

    return (
        <div>
             

        {product && <ItemDetail {...product} />}  {/* Renderiza el componente si product existe */}
        <Link to="/" className="button is-primary is-outlined mt-4 mb-4">
  Volver
</Link>
        </div>
       


    );
};

export default ItemDetailContainer;