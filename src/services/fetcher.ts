'use server';

export async function Fetch({
    number,
    mess,
    timestamp
}: {
    number: string;
    mess: string;
    timestamp: string;
}): Promise<boolean> {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secret: process.env.NEXT_PUBLIC_SECRET,
            number,
            text: `*Hallo 👋,*\nTerimakasih telah mengirimkan pesan.\n\n *Pesan Anda :* \n\n"${mess}"\n\n> ${timestamp}\n> ${number}\n`,
            quoted: JSON.stringify([number, mess]),
            cards: JSON.stringify([
                {
                    imgurl: 'https://i.postimg.cc/MHmzY2Cv/20241127-184633.jpg',
                    text: '',
                    btn: [
                        {
                            name: 'cta_url',
                            buttonParamsJson: JSON.stringify({
                                display_text: 'Instagram',
                                url: 'https://instagram.com/__rust.ly',
                                merchant_url: ''
                            })
                        },
                        {
                            name: 'cta_url',
                            buttonParamsJson: JSON.stringify({
                                display_text: 'Github',
                                url: 'https://github.com/ahmdbnrsl',
                                merchant_url: ''
                            })
                        },
                        {
                            name: 'cta_url',
                            buttonParamsJson: JSON.stringify({
                                display_text: 'Tiktok',
                                url: 'https://tiktok.com/@rust.ly',
                                merchant_url: ''
                            })
                        }
                    ]
                }
            ])
        })
    };
    return await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + 'carrousel',
        option
    ).then((res: any): boolean => (res.status == 200 ? true : false));
}
