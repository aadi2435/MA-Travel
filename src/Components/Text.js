import React from 'react';
import './TextStyle.css';

function Text() {
    return (
        <div>
            <h1><marquee>Welcome to MA-Travels. Enjoy your trip  
                | <span className="country">Japan</span><span className="price">$999</span> |  
                | <span className="country">USA</span><span className="price">$1800</span> | 
                | <span className="country">PARIS</span><span className="price">$2000</span> | 
                | <span className="country">DUBAI</span><span className="price">$1900</span></marquee></h1>
        </div>
    );
}

export default Text;
