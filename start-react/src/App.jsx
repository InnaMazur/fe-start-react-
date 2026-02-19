
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, {useState} from 'react';
// import RangeRefComponent from './components/RangeRefComponent.jsx';
// import Main from './components/usersOrder/Main.jsx';
// import Mainhw from './components/hw10/Mainhw.jsx';
// import CountryTable from './components/CountryTable.jsx';
import PostTable from './components/PostTable.jsx';

function App() {

// const [showCounter, setShowCounter] =useState(true);
// const[propTitle,setPropTitle]=useState('Old title value');
// function changeTitle(){
//   setPropTitle('New value');
// }

        
      const [selectedPost, setSelectedPost] = useState([]);
      function selectPost(post){
        setSelectedPost(selectPost=>[...selectPost,post]);
      }  
      function removePost(index){
        setSelectedPost(selectedPost=>selectedPost.filter((post,i)=>i!==index));
      }
     

  return (
    <>
    <div className="container py-3">

      <PostTable title='Posts' onSelectPost={selectPost}></PostTable>
      <h1>
        Chosed posts:
      </h1>
      <ul className='list-group mb-2'>
        {selectedPost.map((post,index)=>{
        return ( <li key={index} className='list-group-item d-flex justify-content-between'>{post.title}
         <button className='btn btn-danger' onClick={()=>removePost(index)}>Remove Post</button></li>
        );
})}
      </ul>
      {/* <h1>
        Selected countries:
      </h1>
      <ul className='list-group mb-2'>
        {selectedCountry.map((country,index)=>{
        return ( <li key={index} className='list-group-item d-flex justify-content-between'>{country.name.common}
         <button className='btn btn-danger' onClick={()=>removeCountry(index)}>Remove Country</button></li>
        );
})}
      </ul> */}
      {/* <Mainhw></Mainhw> */}
      {/* <Main></Main> */}
    {/* <Header></Header> */}
    {/* <CountryTable title='Table of countries' onSelectCountry={selectCountry}></CountryTable> */}
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
  );
}

export default App
