import { useEffect, useState } from 'react';
import mylogo from '/src/assets/logo.png'
import menu from '/src/assets/menu-icon.png'
import React from 'react';
import { Link  } from 'react-scroll';
import './navbar.css'
function Navbar(){
    const [sticky, seStucky] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? seStucky(true) : seStucky(false);
        })
    },[])

    const [mobileMenu, setMobileMenu] = useState(false)
    const togglemenu = ()=> {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return(<>
    <nav className={`container ${sticky? 'darknav' : ''}`}>
        <img src={mylogo} alt="" className='logo' />
        <ul className={mobileMenu?  '' : ' hide-mobile-menu' }>
            <li><Link to = 'hero' smooth = {true} offset={50}  duration={500} >Home</Link></li>
            <li><Link to = 'program' smooth = {true} offset={-260}  duration={500}>Program</Link> </li>
            <li><Link to = 'about' smooth = {true} offset={-150}  duration={500}>About us</Link></li>
            <li><Link to = 'campus' smooth = {true} offset={-260}  duration={500}>Campus</Link></li>
            <li><Link to = 'testimonials' smooth = {true} offset={-260}  duration={500}>Testimonials</Link></li>
            <li><Link to = 'contact' smooth = {true} offset={-260}  duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={togglemenu} />
    </nav>
            </>);
}
export default Navbar;