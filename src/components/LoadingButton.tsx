import React, { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface LoadingButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    loadingText?: string;
}

export const LoadingButton: FC<LoadingButtonProps> = ({
    children,
    isLoading = false,
    loadingText = 'Loading...',
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(
                'flex items-center justify-center px-4 py-2 font-medium rounded-md transition-colors duration-300',
                'bg-blue-500 text-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                { 'opacity-50 cursor-not-allowed': isLoading }
            )}
            disabled={isLoading}
        >
            {isLoading ? loadingText : children}
        </button>
    );
};

export default LoadingButton;
