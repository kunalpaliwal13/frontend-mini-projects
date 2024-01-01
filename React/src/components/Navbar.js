import React from 'react'



export default function Navbar(props) {
  return (
    <>
    <div className='header'>
        <div className="logo">{props.Logo}</div>
        <div className="header-tags">
                <p>Home</p>
                <p>About</p>
                <p>Contact us</p>
                <p>Other info </p>
        </div>
    </div>
    </>
  )
}
