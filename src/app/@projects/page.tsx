import { MdArrowOutward, MdArrowForward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import Data from '@/data/projects.json';
export default function Projects() {
    return (
        <div
            className='sections scroll-mt-18'
            id='Project'
        >
            <div className='nav-mobile'>Projects</div>
            <div className='content-box mt-0 gap-0 group lg:px-0 transition-all'>
                {Data.map((e: any, i: number) => (
                    <div
                        className='project-content group/box sm:group-hover:opacity-50'
                        key={i}
                    >
                        <div className='project-hidden'></div>
                        <div className='project-detail'>
                            <Link
                                id={`link${i}`}
                                href={e.demo}
                                className='content-title project-title group-hover/box:text-sky-400'
                                rel='noreferrer noopener'
                                aria-label={e.name}
                                target='_blank'
                            >
                                <span className='lg:group-hover/box:bg-sky-600/[0.5] '>
                                    {e.name}
                                </span>
                                <MdArrowOutward className='transition-transform ml-0.5 lg:group-hover/box:bg-sky-600/[0.5] group-hover/box:-translate-y-1 group-hover/box:translate-x-1' />
                            </Link>
                            <div className='content-desc'>
                                <p className='h-full'>{e.desc}</p>
                            </div>
                            <div className='tag-container'>
                                {e.tags.map((el: any, ind: number) => (
                                    <div
                                        key={ind}
                                        className='tag-btn'
                                    >
                                        {el}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='project-box-img'>
                            <div className='relative h-fit border border-slate-800 rounded overflow-hidden group-hover/box:border-slate-600 w-full max-w-[15rem]'>
                                <div className='inset-0 absolute -translate-y-full group-hover/box:translate-y-0 bg-slate-800/[0.45] backdrop-blur transition-all flex justify-center items-center'>
                                    <Link
                                        className='cursor-pointer text-slate-200 text-4xl'
                                        href='https://github.com/ahmdbnrsl'
                                        target='_blank'
                                        rel='noreferrer noopener'
                                        aria-label='Github'
                                    >
                                        <span className='sr-only'>Github</span>
                                        <FaGithub />
                                    </Link>
                                </div>
                                <Image
                                    src={e.thumbnail}
                                    className='project-img'
                                    alt={e.name}
                                    width={320}
                                    height={180}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='content-box project-more'>
                <Link
                    href='https://github.com/ahmdbnrsl/?tab=repositories'
                    className='group/llv flex items-center w-auto'
                    target='_blank'
                >
                    <FaGithub className='mr-3 group-hover/llv:bg-sky-600/[0.5] group-hover/llv:text-sky-400' />
                    <span className='group-hover/llv:bg-sky-600/[0.5] group-hover/llv:text-sky-400'>
                        View Full Project
                    </span>{' '}
                    <MdArrowForward className='ml-0.5 group-hover/llv:bg-sky-600/[0.5] group-hover/llv:text-sky-400 group-hover/llv:translate-x-2' />
                </Link>
            </div>
        </div>
    );
}
