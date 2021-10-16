import React, {useState, useEffect} from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import axios from 'axios';

import './App.css';



function App() {


// declare state variables
const [data, setData] = useState(null);


useEffect(()=>{

  //Fetch Mock Data when component mounts
    const fetchMockData = async() =>{
    try {
      const response = await axios.get('https://mocki.io/v1/0a8a3472-1336-467a-ae37-8ddf0edb26ae');
      // console.log(response.data);
      setData(response.data);
      
    } catch (error) {
      console.log(error);
    }   
  };

  fetchMockData();

}, [])



  return (
    <>
      <Header />
      {data &&
        <Content data={data}/>
      }
    </>
  
  );
}

export default App;
