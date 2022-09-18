import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="qdapp">
    <h1>Counter Management</h1>
    <div className='container'>
        <div className='counter'>
            <h2 align="center" >Counter 1</h2>
            <button>
                Go Offline
            </button>
            <button>
                Comp Curr
            </button>
            <button>
                Call Next
            </button>
        </div>
        <div className='counter'>
            <h2 align="center" >Counter 2</h2>
            <div class="btn-group">
            <button>
                Go Offline
            </button>
            <button>
                Comp Curr
            </button>
            <button>
                Call Next
            </button>
            </div>
        </div>
        <div className='counter'>
            <h2 align="center" >Counter 3</h2>
            <button>
                Go Offline
            </button>
            <button>
                Comp Curr
            </button>
            <button>
                Call Next
            </button>
        </div>
        <div className='counter'>
            <h2 align="center" >Counter 4</h2>
            <button>
                Go Offline
            </button>
            <button>
                Comp Curr
            </button>
            <button>
                Call Next
            </button>
        </div>
    </div>
</div>
   
  )
}




