import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const Container = dynamic(() => import("./container"));

const inter = Inter_Tight({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
    metadataBase: new URL("https://portofolio.ab-rust.xyz"),
    title: "Ahmad Beni Rusli",
    description: "Fullstack Web Developer | Machine Learning Engineer",
    keywords:
        "Ahmad Beni Rusli, ahmad beni rusli, Beni, Fullstack Web Developer, Portofolio, beni, bang ben, stmikkomputama, stmik, majenang, beni, ben, rusli, rusly, beny",

    authors: [
        {
            name: "Ahmad Beni Rusli",
            url: "https://instagram.com/__rust.ly"
        }
    ],

    openGraph: {
        title: "Ahmad Beni Rusli",
        description: "Fullstack Web Developer | Machine Learning Engineer",
        url: "https://portofolio.ab-rust.xyz",
        siteName: "Beni's Portofolio",
        images: [
            {
                url: "https://raw.githubusercontent.com/ahmdbnrsl/photo/refs/heads/main/IMG-20250417-WA0074.jpg",
                width: 3060,
                height: 4080,
                alt: "Ahmad Beni Rusli"
            }
        ],
        type: "website",
        locale: "id_ID"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahmad Beni Rusli",
        description: "Fullstack Web Developer | Machine Learning Engineer",
        images: [
            "https://raw.githubusercontent.com/ahmdbnrsl/photo/refs/heads/main/IMG-20250417-WA0074.jpg"
        ]
    },
    alternates: {
        canonical: "https://portofolio.ab-rust.xyz"
    }
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
        <html lang="en">
            <head>
                <meta name="theme-color" content="#0f172a" />
                <link rel="icon" type="image/svg+xml" href="/favicon.png" />
            </head>
            <body className={inter.className}>
                <Container>
                    <div className="sub-root-container">
                        <header className="header">{children}</header>
                        <main className="main">
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
