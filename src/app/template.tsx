import type { Metadata } from 'next';

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
    icons: {
        icon: '/icon.png'
    },
    openGraph: {
        title: 'Ahmad Beni Rusli',
        description: 'Personal portofolio build with Next.js'
    }
};

export default function Template({ children }: { children: React.ReactNode }) {
    return <header className='header'>{children}</header>;
}
