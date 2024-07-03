'use server';

export async function Fetch({
    number,
    mess
}: {
    number: string;
    mess: string;
}): Promise<boolean> {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: process.env.NEXT_PUBLIC_SECRET,
            number,
            mess,
            rep: 'Terimakasih telah mengirimkan pesan,\nadmin akan merespon anda secepatnya'
        })
    };
    try {
        await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'send', option);
        return true;
    } catch (error) {
        return false;
    }
}
