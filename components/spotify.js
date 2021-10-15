import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import axios from 'axios';
const Spotify =()=> {
  const data =[
    {value:1, name:'A'},
    {value:2, name:'B'},
    {value:3, name:'C'},
];
  return (
      <form onSubmit ={()=>{}}>
          <div className="container">
          <Dropdown options={data}/>
          <Dropdown options={data}/>
          <button type='submit'>
              Search
          </button>
        </div>
      </form>
        
  );
}
export default Spotify;
