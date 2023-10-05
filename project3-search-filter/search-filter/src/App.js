import './App.css';
import MOCK_DATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
 const [searchTerm, setSearchTerm] = useState('');
// console.log(searchTerm);
  return (
    <div className="App-container">
      {/* <h1>hello bachoooo</h1> */}
      <input  onChange={(e)=>{
        setSearchTerm(e.target.value);
      }} type="text" placeholder='First Name' />
      <button type='submit'>Search</button>
     { MOCK_DATA.filter((val)=>{
      if(searchTerm ==''){
        return val
      }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
      
    {

    }
     }).map((item, key) => {
        return <ul>{item.first_name}</ul> ;
      })}
    </div>
  );
}

export default App;
