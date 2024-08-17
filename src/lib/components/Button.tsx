import { HTMLAttributes } from 'react';
import c from './Button.module.css';


interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    text?: string;
    version?: string;
    endIcon?: JSX.Element;
}

const Button = ({ onClick, disabled, children, text, version, endIcon }: ButtonProps) => {

    return (
        <button
            className={`${c.button_main} ${c[`btn_version_${version}`]}`}
            onClick={onClick}
            disabled={disabled}>

            {children ?
                children :
                <p className={c.text}>{text}</p>
            }
            
            {endIcon && endIcon}

        </button>
    );
};

export default Button;