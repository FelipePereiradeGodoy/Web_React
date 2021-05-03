import react from 'react';
import './Input.css';

const Input = ({ name, textLabel, placeholder, className, ...rest }) => {
    return (
        <div className={className}>
            <label htmlFor={name}>{textLabel}</label>
            <input type="text" name={name} placeholder={placeholder} {...rest} />
        </div>
    );
}

export default Input;