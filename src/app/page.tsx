'use client';
import {
    FaGithub,
    FaInstagram,
    FaXTwitter,
    FaLinkedin,
    FaTiktok
} from 'react-icons/fa6';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [play, setPlay] = useState<boolean>(false);
    const HandlePlay = () => {
        let audio: HTMLMediaElement | null = document.getElementById(
            'aud'
        ) as HTMLMediaElement;
        audio?.play();
        setPlay(true);
    };
    const HandlePause = () => {
        let audio: HTMLMediaElement | null = document.getElementById(
            'aud'
        ) as HTMLMediaElement;
        audio?.pause();
        setPlay(false);
    };
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
        <>
            <div className='desc'>
                <h1 className='title cursor-pointer'>
                    <Link href='/'>Ahmad Beni Rusli</Link>
                </h1>
                <div className='flex justify-start gap-3 items-center'>
                    <audio
                        id='aud'
                        loop={true}
                        preload='true'
                    >
                        <source
                            src='/song/song.mp3'
                            type='audio/mp3'
                        />
                    </audio>
                    <div
                        className={`relative h-4 w-4 mr-1 justify-center items-center cursor-pointer ${
                            play ? 'hidden' : 'flex'
                        }`}
                        onClick={HandlePlay}
                    >
                        <span className='inline-flex absolute animate-ping bg-sky-400 opacity-75 rounded-full w-full h-full p-1'></span>
                        <span className='relative bg-sky-600 rounded-full m-1 inline-flex w-full h-full'></span>
                    </div>
                    <div
                        className={`relative h-4 w-5 justify-center items-center gap-1 cursor-pointer ${
                            play ? 'flex' : 'hidden'
                        }`}
                        onClick={HandlePause}
                    >
                        <span className='inline-flex bg-sky-500 h-full rounded-full w-0.5 animate-aud'></span>
                        <span className='inline-flex bg-sky-500 h-full rounded-full w-0.5 animate-aud2'></span>
                        <span className='inline-flex bg-sky-500 h-full rounded-full w-0.5 animate-aud3'></span>
                    </div>
                    <p className='sub-title'>Fullstack Web Developer</p>
                </div>
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
                    rel='noreferrer noopener'
                    aria-label='Github'
                >
                    <span className='sr-only'>Github</span>
                    <FaGithub className='icon hover:text-slate-200' />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/ahmad-beny-15391b289'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label='Linkedin'
                >
                    <span className='sr-only'>Linkedin</span>
                    <FaLinkedin className='icon hover:text-blue-500' />
                </Link>
                <Link
                    href='https://instagram.com/ahmd.bn.tsx'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label='Instagram'
                >
                    <span className='sr-only'>Instagram</span>
                    <FaInstagram className='icon hover:text-fuchsia-500' />
                </Link>
                <Link
                    href='https://twitter.com/LiviaOdrig88804'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label='Twitter'
                >
                    <span className='sr-only'>Twitter</span>
                    <FaXTwitter className='icon hover:text-slate-200' />
                </Link>
                <Link
                    href='https://tiktok.com/@rust.ly'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label='Tiktok'
                >
                    <span className='sr-only'>Tiktok</span>
                    <FaTiktok className='icon hover:text-slate-200' />
                </Link>
            </div>
        </>
    );
}
