import CardWidget from "../CardWidget/CardWidget"
import imagenNav from './imagenesNavBar/laptop.png'

const NavBar =()=> {   //componente NAVBAR
return (
    <nav className="navbar has-background-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a class="navbar-item">
      <img src={imagenNav} alt="Logo" width="50" height="33" /> 
    </a> 

    <button class="button is-black button is-large is-rounded"style={{ marginTop: '10px'  ,marginLeft: '10px' , border: '1px solid white'}}>Inicio</button>
    <button class="button is-black button is-large is-rounded"style={{ marginTop: '10px',marginLeft: '10px', border: '1px solid white'}}>Articulos</button>
    <button class="button is-black button is-large is-rounded"style={{ marginTop: '10px',marginLeft: '10px', border: '1px solid white'}}>Ubicación</button>
  </div>
  <div className="navbar-end">
      <CardWidget className="is-pulled-right" /> 
    </div>
</nav>

)
}
export default NavBar
