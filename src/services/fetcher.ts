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
            mess: `*${mess}*\n\nThank you for sending Your message.`,
            rep: '© 2024 | Ahmad Beni Rusli',
            quoted: JSON.stringify([number, mess]),
            buttons: JSON.stringify([
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Instagram',
                        url: 'https://instagram.com/ahmdbnrsl',
                        merchant_url: ''
                    })
                }
            ])
        })
    };
    return await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + 'custom',
        option
    ).then((res: any): boolean => (res.status == 200 ? true : false));
}
