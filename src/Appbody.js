import React from 'react'
import Navbar from './Navbar';

const Appbody =(props)=> {
  return (
    <div>
       <Navbar/>
       <main id='main' className='main'>
        {props.content}
       </main>
    </div>
  )
}

export default Appbody;
