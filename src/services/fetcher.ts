'use server';

export async function Fetch({
    number,
    mess
}: {
    number: string;
    mess: string;
}): boolean {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: import.meta.env.VITE_SECRET,
            number,
            mess,
            rep: 'Terimakasih telah mengirimkan pesan,\nadmin akan merespon anda secepatnya'
        })
    };
    try {
        await fetch(import.meta.env.VITE_BASE_URL + 'send', option);
        return true;
    } catch (error) {
        return false;
    }
}
