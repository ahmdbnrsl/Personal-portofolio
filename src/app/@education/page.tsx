import { FaLocationDot } from 'react-icons/fa6';
import Data from '@/data/education.json';
import Link from 'next/link';

export default function Education() {
    return (
        <div
            className='sections'
            id='Education'
        >
            <div className='nav-mobile'>Education</div>
            <div className='content-box'>
                {Data.map((e: any) => (
                    <div className='sub-content-box gap-3'>
                        <p className='content-head'>{e.year}</p>
                        <div className='content-detail'>
                            <p className='content-title'>{e.title}</p>
                            <p className='content-subtitle'>{e.level}</p>
                            <p className='content-desc'>{e.desc}</p>
                            <div className='tag-container'>
                                <Link
                                    href={e.location_link}
                                    className='tag-btn cursor-pointer hover:scale-[1.01] transition-all'
                                    target='_blank'
                                >
                                    <FaLocationDot className='mr-1' />
                                    {e.location_name}
                                </Link>
                                {e.tags.map((el: any) => (
                                    <div className='tag-btn'>{el}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
