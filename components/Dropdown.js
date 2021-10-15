import React,{useState} from'react';

const Dropdown = props =>{
    const[selectedvalue,setselectedvalue] = useState('');

    
    return(
    <div>
        <select value ={selectedvalue}onChange={e=>setselectedvalue(e.target.value)}>
            {props.options.map((item,idx)=><option key ={idx}value={item.value}>{item.name}</option>)}
        </select>
        <p>{selectedvalue}</p>
    </div> 
    );
}
export default Dropdown;
