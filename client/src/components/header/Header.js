import React from 'react';
import './header.css';

const Header = ({children, style, className}) => (
    <div className={`header ${className}`} style={style}>{children}</div>
);

export default Header;