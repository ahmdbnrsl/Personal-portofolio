import Link from 'next/link';
export default function Footer() {
    return (
        <div
            className='sections'
            id='Footer'
        >
            <div className='content-box'>
                <div className=' tracking-wide text-sm sm:text-base lg:text-sm text-slate-500 w-fill max-w-[30ch] font-normal leading-normal'>
                    Follow My{' '}
                    <Link
                        href='https://whatsapp.com/channel/0029VbA6Dfl8KMqbps51g83J'
                        target='_blank'
                        className='text-slate-400 font-medium hover:text-sky-400 active:text-sky-400 cursor-pointer'
                    >
                        Whatsapp Channel
                    </Link>{' '}
                    build with Next.JS styling with Tailwind CSS{' '}
                    <span className='text-slate-400 font-medium'>© {new Date().getFullYear()}</span>{' '}
                    by{' '}
                    <span className='text-slate-400 font-medium'>
                        Ahmad Beni Rusli
                    </span>
                </div>
            </div>
        </div>
    );
}
