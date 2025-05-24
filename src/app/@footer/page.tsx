import Link from 'next/link';
export default function Footer() {
    return (
        <div
            className='sections'
            id='Footer'
        >
            <div className='content-box'>
                <div className=' tracking-wide text-sm sm:text-base lg:text-sm text-slate-500 w-fill max-w-[30ch] font-normal leading-normal'>
                    build with Next.js styling with Tailwind css{' '}
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
