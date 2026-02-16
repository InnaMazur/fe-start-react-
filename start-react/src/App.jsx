
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cardes from './components/Cards.jsx';
import React, {useState} from 'react';


function App() {

const [showCounter, setShowCounter] =useState(true);
  return (
    <>
    <div className="container py-3">
    <Header></Header>
    {/* <button className='btn btn-danger' onClick={()=>setShowCounter(!showCounter)}> 
      {showCounter?'Cover counter':'Show counter'}
    </button>
    {showCounter&& <UseEffectComponent></UseEffectComponent>} */}
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
