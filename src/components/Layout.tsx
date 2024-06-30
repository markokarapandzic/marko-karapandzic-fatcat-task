import { FC } from 'react';
import clsx from 'clsx';

export type LayoutProps = {
    children: React.ReactNode;
    background?: string;
};

export type LayoutFC = FC<LayoutProps>;

export const Layout: LayoutFC = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};

export default Layout;
