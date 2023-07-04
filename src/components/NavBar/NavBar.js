import CardWidget from "../CardWidget/CardWidget"
import imagenNav from './imagenesNavBar/laptop.png'
import {Link} from "react-router-dom"
 
const NavBar =()=> {   //componente NAVBAR
return (
    <nav className="navbar has-background-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item">
      <img src={imagenNav} alt="Logo" width="50" height="33" /> 
    </a> 

<Link to ={"/category/notebook"} className="button is danger"> Notebook</Link>
<Link to ={"/category/notebook"} className="button is danger"> Macbook</Link>

  </div>
  <div className="navbar-end">
      <CardWidget className="is-pulled-right" /> 
    </div>
</nav>

)


}
export default NavBar



//listar los productos 

