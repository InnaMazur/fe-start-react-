import React,{useState, useEffect} from 'react';

function UseEffectComponent(props) {
    let [count, setCount] = useState(0);
    function upCounter(){
        setCount(count=>count+1);
    }
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    // });
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    // },[]);
    useEffect(()=>{
        document.title = `Count ${count}`;
        return()=>{
            console.log('component deleted');
        }
    },[count]);
    return (
        <div>
            <p>
                Coun:{count}
            </p>
            <button onClick={upCounter} className='btn btn-primary'>Add+1</button>
        </div>
    );
}

export default UseEffectComponent;