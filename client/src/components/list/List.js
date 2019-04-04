import React from 'react';
import PropTypes from 'prop-types';
import './list.css';


const List  = (props) =>(
    <ul {...props} className={`p-0 list ${props.className} ${!props.showBullet? 'list-style-none':''}`}>
        {props.children}
    </ul>
);
List.propTypes = {
    children:PropTypes.node,
    showBullet:PropTypes.bool
};
export default List;
