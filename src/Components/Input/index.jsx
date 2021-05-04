import react from 'react';

const Input = ({ name, textLabel, placeholder, classDiv, classLabel, classInput, ...rest }) => {
    return (
        <div className={classDiv} {...rest}>
            <label className={classLabel} htmlFor={name}>{textLabel}</label>
            <input className={classInput} type="text" name={name} placeholder={placeholder} />
        </div>
    );
}

export default Input;