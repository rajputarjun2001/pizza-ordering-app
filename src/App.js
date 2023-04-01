import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from './Component/Navbar';
import PizzaData from './Component/PizzaData';
import CartScreen from './Component/CartScreen';
import Footer from './Component/Footer';
import LandingPage from './Component/LandingPage';

const App=()=>
 {
  return (
    <>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element=<LandingPage/>></Route>
        <Route exact path="/menu" element=<PizzaData/>></Route>
        <Route exact path="/cart" element=<CartScreen/>></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
