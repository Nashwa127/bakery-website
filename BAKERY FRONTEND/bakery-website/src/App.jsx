import "./app.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";
function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App