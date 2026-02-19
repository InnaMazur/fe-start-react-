
// import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, {useState} from 'react';
// import RangeRefComponent from './components/RangeRefComponent.jsx';
// import Main from './components/usersOrder/Main.jsx';
import Mainhw from './components/hw10/Mainhw.jsx';

function App() {

// const [showCounter, setShowCounter] =useState(true);
// const[propTitle,setPropTitle]=useState('Old title value');
// function changeTitle(){
//   setPropTitle('New value');
// }
  return (
    <>
    <div className="container py-3">
      <Mainhw></Mainhw>
      {/* <Main></Main> */}
    {/* <Header></Header> */}
    {/* <RangeRefComponent></RangeRefComponent> */}
    {/* <UseRefComponent title = {propTitle}></UseRefComponent>
    <button className='btn btn-primary' onClick={changeTitle}>Change title</button> */}
    {/* <button className='btn btn-danger' onClick={()=>setShowCounter(!showCounter)}> 
      {showCounter?'Cover counter':'Show counter'}
    </button>
    {showCounter&& <UseEffectComponent></UseEffectComponent>} */}
    {/* <Cardes></Cardes> */}
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
