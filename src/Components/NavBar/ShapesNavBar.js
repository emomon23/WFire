import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './ShapesNavBar.css'; 

class MyNavBar extends Component {
    render(){
        return(
           <div className='My-nav-bar-container'>
                <header className='My-nav-bar'>
                        <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shapes'>Shapes</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                        </nav>
                    </header>
            </div>
        );
    }
}

export default MyNavBar;
