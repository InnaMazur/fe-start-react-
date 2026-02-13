import React , {useState} from 'react';

function Counter(props) {
    let[counterValue,setCounterValue] = useState(0);
    function upValue(){
        // setCounterValue(counterValue+1)
        setCounterValue(counterValue=>counterValue+1);
        setCounterValue(counterValue=>counterValue+1);
        setCounterValue(counterValue=>counterValue+1);
    }
    function downValue(){
        setCounterValue(counterValue-1)
    }

    let[userName, setUserName]= useState('');
    function changeUserName (e){
        setUserName(e.target.value);
    }

    let[showState, setShowState]=useState(false);
    function changeShowState(){
        setShowState(showState=>!showState);
    }
    return (
        <div>
            <input
             value={userName} 
             onChange={(e)=>changeUserName(e)}
            placeholder='Type yor name' 
            type="text" />
            <p>
          {userName}
            </p>
   <button  onClick={upValue} className='btn btn-primary'>
            +1
        </button >
        <p>
           {counterValue>0?counterValue: 'To low value'} 
        </p>
        <button onClick={downValue} className='btn btn-danger'>
            -1
        </button>
        <p>
            Search <button onClick={changeShowState} className='btn btn-primary'>Icon</button>
        </p>
        {/* {showState?<div>Search block</div> :null} */}
        {showState && <div>Second option</div>}

        </div>
     
    );
}

export default Counter;