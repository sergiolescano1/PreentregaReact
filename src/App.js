import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import AsusIMg from "./images/asus.jpeg";
import BanghoImg from "./images/bangho.jpeg";
import HpImg from "./images/hp.jpeg";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App has-background-grey">
      <NavBar />

      <div className="container">
                <section className="section">
                <div className="columns">
                <div className="column is-4">
                    <ItemListContainer titulo="ASUS" precio="200000" img={AsusIMg} />
                </div>
                <div className="column is-4">
                    <ItemListContainer titulo="Bangho" precio="300000" img={BanghoImg} />
                </div>
                <div className="column is-4">
                    <ItemListContainer titulo="HP" precio="250000" img={HpImg} />
                </div>
                </div>
                </section>
                </div>
    </div>
  );
}

export default App;
