'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// Color and font definitions
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

const fonts = [
    { variable: 'var(--font-hitman)', title: 'Hitman', letter: 'H' },
    { variable: 'var(--font-flower)', title: 'Flower', letter: 'F' },
    { variable: 'var(--font-comic)', title: 'Comic', letter: 'C' },
    { variable: 'var(--font-grotesk)', title: 'Grotesk', letter: 'G' },
];


const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const ChangeMood = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedColorPair, setSelectedColorPair] = useState({ bgColor: '', textColor: '' });

    useEffect(() => {
        setMounted(true);

        // Retrieve saved values from localStorage
        const savedFont = localStorage.getItem('font');
        const savedBgColor = localStorage.getItem('bgColor');
        const savedTextColor = localStorage.getItem('textColor');

        if (savedFont) {
            setSelectedFont(savedFont);
            document.body.style.fontFamily = savedFont;
        }

        if (savedBgColor && savedTextColor) {
            setSelectedColorPair({ bgColor: savedBgColor, textColor: savedTextColor });
            document.documentElement.style.setProperty('--f-color', savedBgColor);
            document.documentElement.style.setProperty('--s-color', savedTextColor);
        }
    }, []);

    const handleFontChange = (font) => {
        localStorage.setItem('font', font);
        document.body.style.fontFamily = font;
        setSelectedFont(font);
        setTheme('custom'); // Trigger theme change
    };

    const handleColorChange = (bgColor, textColor) => {
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('textColor', textColor);
        document.documentElement.style.setProperty('--f-color', bgColor);
        document.documentElement.style.setProperty('--s-color', textColor);
        setSelectedColorPair({ bgColor, textColor });
        setTheme('custom'); // Trigger theme change
    };

    const randomize = () => {
        const randomFont = getRandomItem(fonts).variable;
        const { bgColor, textColor } = getRandomItem(colorPairs);

        handleFontChange(randomFont);
        handleColorChange(bgColor, textColor);
    };

    if (!mounted) return null;

    return (
        <div className="flex flex-col justify-center items-center">
            <button
                onClick={randomize}
                className='btn w-full lg:py-3'
            ><span className='uppercase'>Changer de Mood</span>

            </button>
        </div>
    );
};

export default ChangeMood;
