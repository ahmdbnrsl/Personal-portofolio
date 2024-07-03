'use client';
import {
    FaGithub,
    FaInstagram,
    FaXTwitter,
    FaLinkedin,
    FaTiktok
} from 'react-icons/fa6';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
    const HandleClick = (e: any) => {
        const element: any = document.getElementById(e.target.textContent);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        let section = document.querySelectorAll('.sections');
        let menu = document.querySelectorAll('.nav-btn');

        window.onscroll = () => {
            section.forEach((i: any) => {
                let top = window.scrollY;
                let offset = i.offsetTop - 90;
                let height = i.offsetHeight;
                let id = i.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    menu.forEach((link: any) => {
                        link.classList.remove('text-slate-200');
                        link.children[0].classList.remove('px-10');
                        link.children[0].classList.remove('bg-slate-200');

                        document
                            ?.querySelector(`.${id}`)
                            ?.classList?.add('text-slate-200');
                        document
                            ?.querySelector(`.${id}`)
                            ?.children[0]?.classList?.add('px-10');
                        document
                            ?.querySelector(`.${id}`)
                            ?.children[0]?.classList?.add('bg-slate-200');
                    });
                }
            });
        };
    }, []);
    return (
        <header className='header'>
            <div className='desc'>
                <h1 className='title cursor-pointer'>
                    <Link href='/'>Ahmad Beni Rusli</Link>
                </h1>
                <p className='sub-title'>Fullstack Web Developer</p>
                <p className='quote'>
                    Professional code resolver, Creative, and Critical thinker
                </p>
                <nav className='nav'>
                    <button
                        className='About nav-btn group'
                        onClick={HandleClick}
                    >
                        <div className='nav-line group-hover:px-10 group-hover:bg-slate-200 group-active:px-10 group-active:bg-slate-200'></div>
                        About
                    </button>
                    <button
                        className='Education nav-btn group'
                        onClick={HandleClick}
                    >
                        <div className='nav-line group-hover:px-10 group-hover:bg-slate-200 group-active:px-10 group-active:bg-slate-200'></div>
                        Education
                    </button>
                    <button
                        className='Project nav-btn group'
                        onClick={HandleClick}
                    >
                        <div className='nav-line group-hover:px-10 group-hover:bg-slate-200 group-active:px-10 group-active:bg-slate-200'></div>
                        Project
                    </button>
                    <button
                        className='Feedback nav-btn group'
                        onClick={HandleClick}
                    >
                        <div className='nav-line group-hover:px-10 group-hover:bg-slate-200 group-active:px-10 group-active:bg-slate-200'></div>
                        Feedback
                    </button>
                </nav>
            </div>
            <div className='icon-box'>
                <Link
                    href='https://github.com/ahmdbnrsl'
                    target='_blank'
                >
                    <FaGithub className='icon hover:text-slate-200' />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/ahmad-beny-15391b289'
                    target='_blank'
                >
                    <FaLinkedin className='icon hover:text-blue-500' />
                </Link>
                <Link
                    href='https://instagram.com/ahmd.bn.tsx'
                    target='_blank'
                >
                    <FaInstagram className='icon hover:text-fuchsia-500' />
                </Link>
                <Link
                    href='https://twitter.com/LiviaOdrig88804'
                    target='_blank'
                >
                    <FaXTwitter className='icon hover:text-slate-200' />
                </Link>
                <Link
                    href='https://tiktok.com/@rust.ly'
                    target='_blank'
                >
                    <FaTiktok className='icon hover:text-slate-200' />
                </Link>
            </div>
        </header>
    );
}
