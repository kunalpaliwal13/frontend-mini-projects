import React, { useState } from 'react'



export default function PageBody(props) {
    const changeName=()=>{
        let a = document.getElementById('NameForm').value;
        setname(a.charAt(0).toUpperCase()+ a.slice(1));
        console.log(a.charAt(0).toUpperCase()+ a.slice(1));
    }
    
    let [name, setname] = useState(props.name);
    
  return (
    <>
    <img className = "img" src = "https://www.hdwallpapers.in/download/colorful_laptop_with_black_background_4k_hd_black_aesthetic-3840x2160.jpg" alt="bodyimg"></img>
    <div className='container'>
        <div className="card">
        <h1 id="heading1">Welcome {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas repellendus corporis illo enim saepe ipsam accusamus consequatur, vero vitae facere quis necessitatibus error porro, at dolorum natus, voluptas cumque est odit laboriosam. Atque quam aliquid explicabo!</p>
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1" className='p1 my-1'>Enter Name</label>
            <input type="email" className="form-control" id="NameForm" placeholder="Enter name"/>
        </div>
        <button type="button" className="btn btn-success my-3" onClick={changeName}>Change Name</button>
        
        </div>
    </div>
    </>
  )
}
