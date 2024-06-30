import { FC } from 'react';
import clsx from 'clsx';

export type ColumnLayoutProps = {
    children: React.ReactNode;
    background?: string;
    className?: string;
};

export type ColumnLayoutFC = FC<ColumnLayoutProps>;

export const ColumnLayout: ColumnLayoutFC = ({
    children,
    background,
    className,
}) => {
    return (
        <div
            className={clsx(
                'flex flex-col items-center justify-center h-full',
                background,
                className
            )}
        >
            {children}
        </div>
    );
};

export default ColumnLayout;
