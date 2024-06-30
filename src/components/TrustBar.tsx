import { FC } from 'react';
import Marquee from 'react-fast-marquee';

export type TrustBarProps = {
    images: string[];
};

export type TrustBarFC = FC<TrustBarProps>;

export const TrustBar: TrustBarFC = ({ images }) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};

export default TrustBar;
