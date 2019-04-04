import React from 'react';
import {Button as AntButton} from 'antd';

const Button = ({children, type, color, ...props}) => {
    delete props.shape;
    return (
        <AntButton {...props} htmlType={type || 'text'} type={color || "default"}>{children}</AntButton>
    )
};

export default Button;
