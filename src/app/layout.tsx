import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';

const Container = dynamic(() => import('./container'));

const inter = Inter_Tight({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    ),
    title: 'Ahmad Beni Rusli',
    description: 'Personal portofolio build with Next.js',
    authors: [
        {
            name: 'Ahmad Beni Rusli',
            url: 'https://instagram.com/ahmd.bn.tsx'
        }
    ],

    openGraph: {
        title: 'Ahmad Beni Rusli',
        description: 'Personal portofolio build with Next.js'
    },
    themeColor: '#0f172a'
};

export default function RootLayout({
    children,
    about,
    education,
    projects,
    feedback,
    footer
}: Readonly<{
    children: React.ReactNode;
    about: React.ReactNode;
    education: React.ReactNode;
    projects: React.ReactNode;
    feedback: React.ReactNode;
    footer: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <meta
                    name='theme-color'
                    content='#0f172a'
                />
            </head>
            <body className={inter.className}>
                <Container>
                    <div className='sub-root-container'>
                        <header className='header'>{children}</header>
                        <main className='main'>
                            {about}
                            {education}
                            {projects}
                            {feedback}
                            {footer}
                        </main>
                    </div>
                </Container>
            </body>
        </html>
    );
}
