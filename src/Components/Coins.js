// import React from 'react'
// import CoinItem from './CoinItem'
// import "./Coins.css";
// import { Link } from 'react-router-dom';
// import { Coin } from '../routes/Coin';
import React from "react";
import CoinItem from "./Conitem";
import "./Coin.css";
import { Link } from "react-router-dom";
import { Coin } from "../routes/Coin";


export const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-nmae'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            
            </div>

            {props.coins.map(coins=>{
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id} >    
                                    <CoinItem coins={coins}  />
                </Link>
)
            })}
        </div>
    </div>
  )
}
