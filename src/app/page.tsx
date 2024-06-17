'use client';
import { Fetch } from '@/services/fetcher';

export default function Form() {
    const HandleSubmit = async (e: any) => {
        e.preventDefault();
        await Fetch({
            number: e.target.no.value,
            mess: e.target.mess.value
        });
        e.reset();
    };
    return (
        <div className='w-full min-h-screen bg-black flex justify-center items-center p-5'>
            <div className='flex flex-col w-full max-w-md gap-5 items-center'>
                <h1 className='bg-gradient-to-b from-white to-zinc-300 text-transparent inline-block bg-clip-text text-5xl font-bold'>
                    Wa API
                </h1>
                <form
                    onSubmit={e => HandleSubmit(e)}
                    className='bg-zinc-950 w-full rounded-xl border border-zinc-800 p-5 flex flex-col gap-3'
                >
                    <div className='flex flex-col'>
                        <label
                            htmlFor='no'
                            className='text-zinc-400'
                        >
                            masukan nomor wa
                        </label>
                        <input
                            name='no'
                            type='number'
                            id='no'
                            className='mt-2 text-zinc-200 px-5 py-3 outline-0 bg-zinc-900 rounded-xl border-4 border-zinc-700 focus:border-zinc-500 active:border-zinc-500'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            htmlFor='mess'
                            className='text-zinc-400'
                        >
                            masukan pesan
                        </label>
                        <textarea
                            name='mess'
                            id='mess'
                            className='mt-2 text-zinc-200 px-5 py-3 outline-0 bg-zinc-900 rounded-xl border-4 border-zinc-700 focus:border-zinc-500 active:border-zinc-500'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='mt-3 px-5 py-2 rounded-xl bg-gradient-to-b from-white to-zinc-200 text-black font-medium text-xl'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
