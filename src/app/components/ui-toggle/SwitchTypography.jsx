'use client';
import { useState, useEffect } from 'react';

const fonts = [
    { variable: 'var(--font-grotesk)', title: 'Grotesk', letter: 'G' },
    { variable: 'var(--font-flower)', title: 'Serif', letter: 'S' },
    { variable: 'var(--font-hitman)', title: 'Hitman', letter: 'H' },
    { variable: 'var(--font-comic)', title: 'Comic', letter: 'C' },
];

const ChangeTypography = () => {
    const [selectedFont, setSelectedFont] = useState('');

    useEffect(() => {
        const savedFont = localStorage.getItem('font');
        if (savedFont) {
            setSelectedFont(savedFont);
            document.body.style.fontFamily = savedFont;
        }
    }, []);

    const handleFontChange = (font) => {
        localStorage.setItem('font', font);
        document.body.style.fontFamily = font;
        setSelectedFont(font);
    };

    return (
        <div className="flex flex-col justify-center items-center h-auto">
            <div className="flex items-center flex-col lg:grid lg:grid-cols-3">
                {fonts.map((font, index) => (
                    <button
                        key={index}
                        onClick={() => handleFontChange(font.variable)}
                        className="flex flex-col lg:flex-row items-center p-2 m-1  rounded cursor-pointer"
                    >
                        <div className='flex items-center flex-col'>
                            <div className='text-2xl border-color border rounded-full w-8 h-8 flex items-center justify-center' style={{ fontFamily: font.variable }}>
                                {font.letter}
                            </div>
                            <span className="lg:ml-0 lg:mt-2">{font.title}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChangeTypography;
