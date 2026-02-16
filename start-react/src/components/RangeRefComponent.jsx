import React,{useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';

RangeRefComponent.propTypes = {
    
};

function RangeRefComponent(props) {
    const[value,setValue] = useState(2.5);
    const[previous,setPrevious]= useState(2.5);

    const rangeRef = useRef(null);
    const prevValueRef = useRef(2.5);

    useEffect (()=>{
        setPrevious(prevValueRef.current);
        prevValueRef.current = value;
    },[value]);

    const handleChange = ()=>{
        const newValue = Number(rangeRef.current.value);
        setValue(newValue);
    };
  

    return (
        <div>
        <label htmlFor="range3" className="form-label">Текущее значение: {value}</label>
        <div>
         Было:{previous}
        </div>
        <div>
       Стало: {value}
        </div>
<input type="range" className="form-range" min="0" max="5" step="0.5" id="range3" ref={rangeRef} value={value} onChange={handleChange}></input>
</div>
    );
}

export default RangeRefComponent;