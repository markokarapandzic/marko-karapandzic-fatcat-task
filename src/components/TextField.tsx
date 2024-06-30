import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TextFieldProps
    extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    error?: string | false | undefined;
    textArea?: boolean;
}

export type TextFieldFC = FC<TextFieldProps>;

const TextField: TextFieldFC = ({ label, error, textArea, ...props }) => {
    const inputProps = {
        className: clsx(
            'px-4 py-2 border rounded-md transition duration-300 ease-in-out',
            {
                'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none':
                    !error,
                'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none':
                    error,
            }
        ),
        ...props,
    };

    return (
        <div className="flex flex-col my-4">
            <label className="mb-2 text-gray-700">{label}</label>
            {textArea ? (
                <textarea
                    {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
            {error && (
                <span className="mt-1 text-sm text-red-500">{error}</span>
            )}
        </div>
    );
};

export default TextField;
