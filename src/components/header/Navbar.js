import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';





import './Navbar.css'




function Navbar() {
    return (
        <div className='navbar-container'>
            
            <nav className='navbar'>
                <a href='#'>Watch a short interactive demo and live Q&A -Sign up now -</a>
                <ul>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Sign In</a></li>
                </ul>
            </nav>
            <div className='navbar-lower'>
                <div className='logo'>Logo</div>
                <div>
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
