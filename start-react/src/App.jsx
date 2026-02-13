
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyButton from './components/customButton/MyButton.jsx';
import logo from './assets/netflix.png';
import Counter from './components/Counter.jsx';
import ProductList from './components/ProductList.jsx';
import Cardes from './components/Cards.jsx';



function App() {


  return (
    <>
    <div className="container py-3">
    <Header></Header>
    <Cardes></Cardes>
    {/* <ProductList></ProductList>
    <Counter></Counter>
    <img src={logo} alt="logo" />
    <MyButton></MyButton>
   <div className="small wrapper ">
Test CSS
   </div>
   <Footer></Footer> */}
    </div>

    </>
  )
}

export default App
