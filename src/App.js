//file import

//CSS Import
import './App.css';

//library import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages import
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Products from "./pages/Products.js";
import ProductsPages from "./pages/ProductsPages.js";

//components import
import Navigation from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/about/' element ={<About/>}></Route>
        <Route path='/products/' element ={<Products/>}></Route>
        <Route path='/products/:productname' element={<ProductsPages/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
