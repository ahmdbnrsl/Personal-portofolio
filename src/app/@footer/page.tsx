import Link from 'next/link';
export default function Footer() {
    return (
        <div
            className='sections'
            id='Footer'
        >
            <div className='content-box'>
                <div className=' tracking-wide text-sm sm:text-base lg:text-sm text-slate-500 w-fill max-w-[30ch] font-normal leading-normal'>
                    inspire by{' '}
                    <Link
                        href='https://brittanychiang.com'
                        target='_blank'
                        className='text-slate-400 font-medium hover:text-sky-400 active:text-sky-400 cursor-pointer'
                    >
                        brittanychiang.com
                    </Link>{' '}
                    build with Next.js styling with Tailwind css{' '}
                    <span className='text-slate-400 font-medium'>© 2024</span>{' '}
                    by{' '}
                    <span className='text-slate-400 font-medium'>
                        Ahmad Beni Rusli
                    </span>
                </div>
            </div>
        </div>
    );
}
