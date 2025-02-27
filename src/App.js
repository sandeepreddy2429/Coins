//import React, {useState,useEffect} from "react";
//import axios from 'axios'
//import { Coins } from "./Components/Coins";
//import { Navbar } from "./Components/Navbar";
//import {Routes,Route} from 'react-router-dom';
//import { Coin } from "./routes/Coin"; 
//import './index.css';
import React, {useState,useEffect} from "react";
import axios  from "axios";
import { Coin } from "./routes/Coin";
import { Coins } from "./Components/Coins";
import { Navbar } from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
function App() {
  const [coins,setCoins]=useState([]);

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=false `
useEffect(()=>{
  axios.get(url).then((response)=>{
    setCoins(response.data)
  

  }).catch((error)=>{
    console.log(error);
  })
}, [])

  return (




    <div>
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={ <Coins coins={coins} />}/>
        <Route path="/coin" element={<Coin />}>
          <Route path=':coinId' element={<Coin />}/>
        </Route>
      </Routes>
     */}
     <Routes>
      <Route path="/" element={ <Coins coins={coins} />}/>
      <Route path="/coin" element={<Coin />}>
        <Route path=":coinId" element={<Coin />}/>
      </Route>
     </Routes>

    </div>
  );
}

export default App;
