import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
const ListItem  = (props) => (
    <li style={props.style} className={`list-item ${props.className}`}>
        {props.children}
    </li>
);
ListItem.propTypes = {
    children:PropTypes.any,
    style:PropTypes.object,
    className:PropTypes.string,
    disabled:PropTypes.bool,
    onClick:PropTypes.func
    
};

export default ListItem;
