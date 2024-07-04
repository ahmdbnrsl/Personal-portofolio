'use client';
import { Inter_Tight } from 'next/font/google';
import { useState } from 'react';
import './globals.css';

const inter = Inter_Tight({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
    children,
    about,
    education,
    projects,
    feedback,
    footer
}: Readonly<{
    children: React.ReactNode;
    about: React.ReactNode;
    education: React.ReactNode;
    projects: React.ReactNode;
    feedback: React.ReactNode;
    footer: React.ReactNode;
}>) {
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
        <html lang='en'>
            <body className={inter.className}>
                <div
                    className='root-container'
                    onMouseOver={MouseOver}
                    translate='no'
                >
                    <div
                        className='lg:absolute inset-0 z-[999] fixed pointer-events-none transition duration-300'
                        style={{
                            backgroundImage: `radial-gradient(600px circle at ${x}px ${y}px, rgba(20, 78, 216, 0.15), transparent 80%)`
                        }}
                    ></div>
                    <div className='sub-root-container'>
                        <header className='header'>{children}</header>
                        <main className='main'>
                            {about}
                            {education}
                            {projects}
                            {feedback}
                            {footer}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
