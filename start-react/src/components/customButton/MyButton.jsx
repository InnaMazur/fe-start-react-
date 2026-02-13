import React from 'react';
import style from './MyButton.module.css';

function MyButton(props) {
const inlineStyle = {
    backgroundColor: 'yellow',
    color: 'white',
    padding: '20px',
    margin: '50px',
    fontSize: '30px',
}
const callAlert=()=>{
    alert('Hello');
}
const helloUser=(userName)=>{
alert(`Hello ${userName}`);
}
const eventInfo=(e)=>{
    e.preventDefault();
    console.log(e)
}
    return (
        <>
         <button onClick={callAlert} className={style.custom}>
            Test module css
        </button>

        <button onClick={()=>helloUser('Test')} style={inlineStyle}>
            Inline style
        </button>

        
        <button onClick={(e)=>eventInfo(e)} style={inlineStyle}>
            Inline style
        </button>
        </>
       
    );
}

export default MyButton;