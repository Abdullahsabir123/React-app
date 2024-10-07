import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <center>
    <h1 className='text1'>About</h1>
    </center>
    <div className='container'>
        <div className='container1'>
            <h3 className='text'>Who we are</h3>
            <p className='mar'>Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque a commodi</p>
            <p>tempore facilis at quo aspernatur enim doloremque inventore</p>
            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit Quas</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit Quas</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit Quas</li>
            </ol>
        </div>
        <div className='container2'>
            <p className='mar1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus a quis, iusto enim, reprehenderit architecto ipsa veritatis corporis dolorum sint quos eveniet repudiandae, quibusdam veniam. Excepturi recusandae eius facere fuga doloremque quis, assumenda, culpa, ratione consectetur aut ipsa dolores modi a!</p>
            <button> Read More <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
    </div>
    </>
  )
}
