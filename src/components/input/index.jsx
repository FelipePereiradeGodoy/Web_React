import React from 'react';

const Input = ({ name, textLabel, placeholder, classDiv, classLabel, classInput, ...rest }) => {
    return (
        <div className={classDiv} >
            <label className={classLabel} htmlFor={name}>{textLabel}</label>
            <input className={classInput} type="text" name={name} placeholder={placeholder} {...rest} />
        </div>
    );
}

export default Input;