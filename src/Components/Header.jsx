import React, {useState} from 'react';
import './Style.scss';

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
        if(!click) {
            document.body.classList.add('light');
        }
        else {
            document.body.classList.remove('light');
        }
    }
    return (
        <header>
            <div className="text--wrapper">
                <h1 className="heading">Social Media Dashboard</h1>
                <p className="followers">Total followers: 23,004</p>
            </div>
            <div className="toggle--wrapper">
                <span className="dark">{click ? "Dark Mode" : "Light Mode"}</span>
                <div onClick={handleClick} className={click ? 'toggler active' : 'toggler'}>
                    <div className="circle"></div>
                </div>
            </div>
        </header>
    )
}

export default Header;