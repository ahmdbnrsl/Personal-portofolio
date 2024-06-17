'use server';

export async function Fetch({
    number,
    mess
}: {
    number: string;
    mess: string;
}) {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: process.env.NEXT_PUBLIC_SECRET,
            number,
            mess,
            rep: 'Terimakasih telah mengirimkan pesan,\nadmin saya akan merespon anda secepatnya'
        })
    };

    await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'send', option)
        .then(response => response.json())
        .then(data => console.log('success'))
        .catch(error => console.error(error));
}
