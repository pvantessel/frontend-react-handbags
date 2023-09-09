import React from 'react';
function Button({buttonType, buttonText, buttonAction, buttonDisabled}) {
    return (
        <button
            type={buttonType}
            onClick={buttonAction}
            disabled={buttonDisabled}
        >
            {buttonText}
        </button>
    )
}

export default Button;