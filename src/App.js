import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer/ItemCategoryContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App has-background-black">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path ='/' element ={<ItemListContainer/>}/> 
    {/*  <Route path ='/category/:categ' element ={<ItemCategoryContainer/>}/> */}
      <Route path='/item/:itemId' element ={ <ItemDetailContainer/>}/>
      <Route path ='/' element ={<ItemCount/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;


