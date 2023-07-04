import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail =({id,name,category,description})=> {
    const descriptionLines = description.split('\n'); // Divide la descripción en líneas separadas

return (
    <article>
        <header>
            <div>
            <h2>{name}</h2>
            </div>
            
            <div>
          {descriptionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
</div>
        </header>
    </article>
)
}

export default ItemDetail 
