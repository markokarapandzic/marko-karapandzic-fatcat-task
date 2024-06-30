import { FC } from 'react';

import clsx from 'clsx';

export type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

export type ButtonFC = FC<ButtonProps>;

export const Button: ButtonFC = ({ children, onClick, className }) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
