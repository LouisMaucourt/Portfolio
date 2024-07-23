"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import TransitionLink from '../layout/TransitionLink';
import Link from 'next/link';

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
        <div ref={scrollContainerRef} className='flex lg:flex-col lg:gap-7 gap-12 overflow-auto pb-12 items-baseline overflow-y-hidden'>
            {images.map((image, index) => (
                <div key={index} className="flex flex-col w-full justify-center">
                    {withLinks && image.link ? (
                        <TransitionLink href={image.link} className="relative h-[60vh] lg:h-[50vh] w-[40vw] lg:w-full max-w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </TransitionLink>
                    ) : (
                        <div className="relative h-[60vh] lg:h-[50vh] w-[40vw] lg:w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl h-[60vh]"
                            />
                        </div>
                    )}
                    <div className='flex flex-wrap justify-between items-center lg:flex-col'>
                        <h3 className=" text-2xl">{image.title}</h3>
                        <p className='opacity-85'>{image.attribute || ''}</p>
                        {image.websitelink && (
                            <a href={image.websitelink} target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                Voir le site
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectImages;
