import React from 'react';






import './Navbar.css'
function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href='#'>Watch a short interactive demo and live Q&A -Sign up now -</a></li>
                </ul>
                <ul>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Sign In</a></li>
                </ul>
            </nav>
            <div className='main'>
                <img src="/logo.PNG" alt='logo'/>
                <div className='child-main'>
                    <select>
                        <option>Products</option>
                    </select>
                    <select>
                        <option>Industries</option>
                    </select>
                    <select>
                        <option>Services</option>
                    </select>
                    <select>
                        <option>Partners</option>
                    </select>
                    <select>
                        <option>Resources</option>
                    </select>
                    <select>
                        <option>Company</option>
                    </select>
                </div>
                <div className='get-price'>
                    <button>Get pricing</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
