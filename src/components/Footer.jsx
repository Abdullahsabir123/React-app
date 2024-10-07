import React from 'react'

export default function Footer(props) {
  return (
    <>
    <div className='div-dis mar'>
      <h1>{props.footer}</h1>
      <ul className='list Dis'>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      </div>
    </>
  )
}
Footer.defaultProps ={
  footer: 'Footer',
}