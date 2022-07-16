import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {

const [show, handleShow] = useState(false);

const history = useHistory();

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
}, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img
                onClick={() => history.push("/")}
                className='nav__logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='logo'
            />

            <img 
                onClick={() => history.push("/profile")}
                className='nav__avatar'
                src='https://aws1.discourse-cdn.com/business4/uploads/askfedora/original/2X/2/2ac4191051d9dc1e67b61497247d0f1cba5cd6a0.png'
                alt=''
            />
        </div>
    </div>
  )
}

export default Nav