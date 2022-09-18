import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ticketCount,setTicketCount] = useState(1);
  const [ticketArray,setTicketArray] = useState([]);
  const createToken = async ()=>{
    setTicketArray(prevArray=>[...prevArray,ticketCount]);
    setTicketCount((prevCount)=>prevCount +1);
    //setTicketArray((oldArray)=>oldArray+1);
    const res = await fetch ('/api/queue',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        no : 1,
        ticketNumbers: ticketArray,
      }),
    });
  }
  return (
    <div className="qdapp">
            <h1> Customer View</h1>
            <div className='cont'>
                <h2>
                    Now Serving : Num
                </h2>
                <h2>Last Number: {ticketCount-1}</h2>
                <button onClick={createToken}>
                    Take a Number
                </button>
            </div>
            <div className='container'>
                <div className='counter'>
                    <span className='dot'></span>
                    <h2 align="center" >Counter 1</h2>
                </div>
                <div className='counter'>
                    <span className='dot'></span>
                    <h2 align="center" >Counter 2</h2>
                </div>
                <div className='counter'>
                    <span className='dot'></span>
                    <h2 align="center" >Counter 3</h2>
                </div>
                <div className='counter'>
                    <span className='dot'></span>
                    <h2 align="center" >Counter 4</h2>
                </div>
            </div>
        </div>
  )
}
