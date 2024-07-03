"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../assets/Button';


const ProjectImages = ({ images, withLinks = true }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return;

        const onWheel = (e) => {
            if (e.deltaY !== 0 && e.shiftKey === false) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            }
        };

        scrollContainer.addEventListener('wheel', onWheel);

        return () => {
            scrollContainer.removeEventListener('wheel', onWheel);
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className='flex gap-5 overflow-auto pb-11'>
            {images.map((image, index) => (
                <div key={index} className="flex flex-col">
                    {withLinks ? (
                        <Link href={image.link} className="relative h-[70vh] w-[60vw] max-w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl"
                            />
                        </Link>
                    ) : (
                        <div className="relative h-[70vh] w-[60vw] max-w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl"
                            />
                        </div>
                    )}
                    <p className="mt-2">{image.title}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectImages;
