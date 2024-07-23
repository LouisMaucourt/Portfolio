'use client';
import { useEffect, useState } from 'react';

const CustomSvgIcon = ({ src, width, height, style, className }) => {
    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        fetch(src)
            .then(response => response.text())
            .then(text => {
                const parser = new DOMParser();
                const svg = parser.parseFromString(text, 'image/svg+xml').querySelector('svg');

                if (svg) {
                    const paths = svg.querySelectorAll('path');
                    paths.forEach(path => path.setAttribute('fill', 'var(--s-color)'));
                    svg.setAttribute('width', width);
                    svg.setAttribute('height', height);
                    setSvgContent(svg.outerHTML);
                }
            });
    }, [src, width, height]);

    if (!svgContent) {
        return null;
    }

    return (
        <div
            dangerouslySetInnerHTML={{ __html: svgContent }}
            style={style}
            className={className}
        />
    );
};

export default CustomSvgIcon;
