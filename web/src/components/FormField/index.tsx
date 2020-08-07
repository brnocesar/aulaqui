import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
};

const FormField: React.FunctionComponent<FormFieldProps> = ({ name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default FormField;