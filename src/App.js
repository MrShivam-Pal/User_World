import React , {useEffect, useState}from 'react';
import './App.css';
import Usercard from './components/Usercard';

function App() {

  const [carddata , setcarddata] = useState([]);
  const [show , setshow] = useState(false);

  const alldata = async () => {
    var response = await fetch("https://reqres.in/api/users?page=1");
    response = await response.json();
    setcarddata(response.data);
  }
  useEffect(() => {
    alldata();
  } ,[])

  return (
    <div className='background'>
    <div className="header">
            <a href="#" className="brandname">User🌏World</a>
            <button onClick={()=> setshow(true)} className="button">Get User</button>
    </div>
    
    { show? <div className='users'>
     {carddata?.map((element , index) => 
      <Usercard link ={element.avatar} firstname={element.first_name} lastname={element.last_name}></Usercard>
     )} </div>: <div className='welcomemessage'> <h1 >Welcome To The <span>User🌏World</span></h1></div>}
     
    </div>
  );
}

export default App;
