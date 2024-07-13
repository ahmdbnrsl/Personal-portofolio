import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                rad: 'radial-gradient(600px circle at 0px 0px, rgba(20, 78, 216, 0.15), transparent 80%)'
            },
            animation: {
                shift: 'shift 1.3s ease-in-out infinite',
                shift2: 'shift 0.5s ease-in-out infinite',
                shift3: 'shift 2s ease-in-out infinite',
                aud: 'aud 1s ease-in-out infinite',
                aud2: 'aud2 1s ease-in-out infinite',
                aud3: 'aud3 1s ease-in-out infinite'
            },
            keyframes: {
                shift: {
                    '0%, 100%': { transform: 'translate(1.5rem, 0)' },
                    '50%': { transform: 'translate(0)' }
                },
                aud: {
                    '0%, 100%': { transform: 'scaleY(1.2)' },
                    '40%': { transform: 'scaleY(0.8)' }
                },
                aud2: {
                    '0%, 100%': { transform: 'scaleY(0.8)' },
                    '50%': { transform: 'scaleY(1.2)' }
                },
                aud3: {
                    '0%, 100%': { transform: 'scaleY(1.2)' },
                    '60%': { transform: 'scaleY(0.8)' }
                }
            }
        }
    },
    plugins: []
};

export default config;
