'use client';
import { useState } from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const MouseOver = (e: any) => {
        if (window.innerWidth >= 1280) {
            setX(e.clientX);
            setY(e.pageY);
        } else {
            setX(0);
            setY(0);
        }
    };
    return (
        <div
            className='root-container'
            onMouseOver={MouseOver}
            translate='no'
        >
            {children}
        </div>
    );
}
