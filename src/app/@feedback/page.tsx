'use client';
import { FaWhatsapp } from 'react-icons/fa6';
import { CiPaperplane } from 'react-icons/ci';
import { IoMdPaperPlane } from "react-icons/io";
import { Fetch } from '@/services/fetcher';
import { useState } from 'react';

export default function Feedback() {
    const [loading, setLoading] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<string>('opacity-100');
    const [isDisable, setIsDisable] = useState<boolean>(false);
    const [errs, setErrs] = useState<boolean>(false);

    const date = (isDate: string): string => {
        const date: Date = new Date(Number(isDate));

        return `${String(date.getDate()).padStart(2, '0')}/${String(
            date.getMonth() + 1
        ).padStart(2, '0')}/${date.getFullYear()}`;
    };

    const hour = (isDate: string): string => {
        const date: Date = new Date(Number(isDate));
        return `${String(date.getHours()).padStart(2, '0')}:${String(
            date.getMinutes()
        ).padStart(2, '0')}`;
    };

    const HandleSubmit = async (e: any) => {
        e.preventDefault();
        if (
            e.target.phone.value.length < 9 ||
            e.target.phone.value.length > 15
        ) {
            e.target.phone.focus();
        } else if (e.target.message.value.length < 1) {
            e.target.message.focus();
        } else {
            setLoading(true);
            setOpacity('opacity-50');
            setIsDisable(true);
            try {
                const fetching: boolean = await Fetch({
                    number: e.target.phone.value,
                    mess: e.target.message.value,
                    timestamp: `${date(Date.now().toString())} ${hour(
                        Date.now().toString()
                    )}`
                });
                if (fetching) {
                    setLoading(false);
                    setOpacity('opacity-100');
                    setIsDisable(false);
                    e.target.reset();
                } else {
                    throw new Error('ERR: Server is down!');
                }
            } catch (err) {
                window.navigator.vibrate(200);
                setLoading(false);
                setIsDisable(false);
                setErrs(true);
                setTimeout(() => {
                    setErrs(false);
                    setOpacity('opacity-100');
                }, 3000);
            }
        }
    };
    return (
        <div
            className='sections scroll-mt-14 relative'
            id='Feedback'
        >
            <div className='nav-mobile'>Send message</div>
            <div className={`sending-error-box ${errs ? 'flex' : 'hidden'}`}>
                <p className='font-mono text-sm sm:text-base md:text-lg lg:text-base text-orange-400 font-medium tracking-normal px-5 py-1 rounded bg-slate-500/[0.25] backdrop-blur border border-slate-600'>
                    <span className='font-bold text-red-500'>ERR</span>: Enter a
                    Valid WhatsApp number!
                </p>
            </div>
            <div
                className={`${loading ? 'flex' : 'hidden'} sending-loading-box`}
            >
                <div className='animate-shift px-12 sending-loading-content'></div>
                <div className='animate-shift2 px-8 sending-loading-content'></div>
                <div className='animate-shift3 px-10 sending-loading-content'></div>
            </div>
            <div className={`${opacity} content-box transition-all`}>
                <div className='text-lg tracking-tight'>
                    <p className='send-head'>
                        <FaWhatsapp className='mr-2' /> Send your feedback
                    </p>
                    <p className='send-sub-head'>
                        I really hope for criticism and suggestions from you.
                        Send message via WhatsApp bellow.
                    </p>
                </div>
                <form
                    onSubmit={HandleSubmit}
                    className='send-form'
                >
                    <div className='send-input-group'>
                        <input
                            className='send-input'
                            placeholder='Enter your valid WhatsApp number (9-15 char)'
                            type='text'
                            inputMode='numeric'
                            name='phone'
                        />
                        <button
                            type='submit'
                            className='send-btn'
                            disabled={isDisable}
                        >
                            {loading ? 'Sending...' : 'Submit'}{' '}
                            <IoMdPaperPlane
                                className={`ml-1 ${
                                    loading ? 'hidden' : 'inline-flex'
                                }`}
                            />
                        </button>
                    </div>
                    <textarea
                        name='message'
                        placeholder='Your message goes here...'
                        className='h-40 send-input w-full resize-none'
                    ></textarea>
                </form>
            </div>
        </div>
    );
}
