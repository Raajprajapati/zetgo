import React from 'react';;
import logo from '../public/logo.png';
import hamburger from '../public/Hamburger.svg'
import Image from 'next/image';

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className="nav_wrapper">
				<div className="logo">
					<Image src={logo} alt="" 
					width="50px"
					height="50px"/>
					<div className="name">
						Zetgo
					</div>

				</div>
				<div className="toggle">
				<Image src={hamburger} alt="" 
					width="50px"
					height="50px"/>
				</div>
			</div>
        </nav>
    </>
  )
}

export default Navbar