import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function serviceCenter() {
    return (
        <div className='App'>
                <header className='Navbar'>
                    <h1>Service Center</h1>
                    <ul>
                    <li><Link to="/servicecenter">Home</Link></li>
                    <li><Link to="/servicerequests">Service Requests</Link></li>
                    </ul>
                    </header>
            </div>
    )
}

