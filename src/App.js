import React, {useState, useEffect} from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.scss';



function App() {

// declare state variables, initialise with value null
const [data, setData] = useState(null);


//Fetch Mock Data when component mounts, then update data state
useEffect(()=>{

    const fetchMockData = async() =>{
    try {
      const response = await axios.get('https://mocki.io/v1/0a8a3472-1336-467a-ae37-8ddf0edb26ae');
      setData(response.data);
      
    } catch (error) {
      console.log(error);
    }   
  };

  fetchMockData();

}, [])



  return (
    
    <div className="wrapper">
      <Header />

      {data &&
        <Content data={data}/>
      }

      {!data && <h1 className="warning-message">sorry, somthing just went wrong!</h1>}
    </div >

  );
}

export default App;
