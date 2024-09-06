import React from 'react';
import './Styles.scss';

interface ButtonProps {
    label: string;
    type: 'button';
    onClick?: () => void;
    variant?: 'primary' | 'secondary'; // Add a variant prop for two styles
}

export const Button: React.FC<ButtonProps> = ({ label, type, onClick, variant = 'primary' }) => {
    return (
        <div className={`custom-button font-roboto ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`}>
            <button
                type={type}
                className={`custom-btn font-roboto ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
};
