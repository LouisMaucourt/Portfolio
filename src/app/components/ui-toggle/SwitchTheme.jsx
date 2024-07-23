'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Combine colors and textColors into a single array of objects
const colorPairs = [
    { bgColor: '#F4ECE8', textColor: '#141414' },
    { bgColor: '#FFCED3', textColor: '#FC2602' },
    { bgColor: '#3357FF', textColor: '#33FFF5' },
    { bgColor: '#D66EAE', textColor: '#1E249F' },
    { bgColor: '#E0D9D3', textColor: '#4A549C' },
    { bgColor: '#FEFDF9', textColor: '#198A56' },
    { bgColor: '#BCFF00', textColor: '#0D0405' },
    { bgColor: '#FE011A', textColor: '#0D0405' },
    { bgColor: '#1FCC70', textColor: '#0D0405' }
];

const SwitchTheme = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);

        // Retrieve saved colors from localStorage
        const savedBgColor = localStorage.getItem('bgColor');
        const savedTextColor = localStorage.getItem('textColor');

        if (savedBgColor && savedTextColor) {
            document.documentElement.style.setProperty('--f-color', savedBgColor);
            document.documentElement.style.setProperty('--s-color', savedTextColor);
        }
    }, []);

    if (!mounted) return null;

    const handleClick = (bgColor, textColor) => {
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('textColor', textColor);

        document.documentElement.style.setProperty('--f-color', bgColor);
        document.documentElement.style.setProperty('--s-color', textColor);
        setTheme('custom');
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='grid gap-4 grid-cols-3'>
                {colorPairs.map(({ bgColor, textColor }, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(bgColor, textColor)}
                        style={{
                            width: '1.7rem',
                            height: '1.7rem',
                            borderRadius: '50%',
                            background: `linear-gradient(0deg, ${bgColor}, ${textColor})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwitchTheme;
