import React from "react";
// import specific css file here
import './Header.css'
class Header extends React.Component{
    render(){
        return(
            <header className="header">
               <nav className="nav container">
                <a href="#" className="nav__logo">
                    Basil.
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
                    </ul>
                </div>
               </nav>
            </header>
        )
    }
}

// we have to export this component to app
export default Header
// when we use default keyword we can import any name this component [ in app component ]