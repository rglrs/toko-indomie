import './App.css';
import Navigation from './components/Navigation';
import Promo from './components/Promo';
import "./style/landingPage.css"
import Product from "./components/category"
import Products from "./components/Products"

function App() {
  return (
    <div>
      <div className="Navigation border">
        <Navigation />
      </div>
      <div className="bgPromo">
        <Promo />
      </div>
      <div className="category">
        <Product />
      </div>
      <div className="bgproduct">
        <Products />
      </div>
    </div>
  );
}

export default App;
