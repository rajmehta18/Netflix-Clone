import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

    const[show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.screenY > 100)
            {
                handleShow(true)
            }
            else
            {
                handleShow(false)
            }   
        })
        return() => {
            window.removeEventListener('scroll')
        }
    },[])

    return(
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_logo' src='https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024' alt='navLogo'></img>
            <img className='nav_avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' alt='navAvatar'></img>
        </div>


    )
}

export default Nav