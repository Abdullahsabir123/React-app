import React from 'react';
import './Nav.css';

export default function Nav(props) {
  return (
    <>
    <div className='div-dis'>
      <h1>{props.Brand}</h1>
      <img src={props.pic} alt="" width={50} height={50} className='Round' />
      <ul className='list Dis'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    </>
  );
}
Nav.defaultProps ={
  Brand: 'Brand Name',
  pic: 'https://images.pexels.com/photos/28210169/pexels-photo-28210169/free-photo-of-a-small-house-on-a-hillside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
}
