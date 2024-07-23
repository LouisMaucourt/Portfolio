'use client';
import { useState, useEffect } from 'react';
import TransitionLink from '../layout/TransitionLink';
import Button from '../assets/Button';

const ProjectTitle = () => {
    const projects = [
        { id: 1, title: "Website", imageUrl: "../images/projects/Website-LesKollectgers.webp" },
        { id: 2, title: "3D", imageUrl: "../images/projects/3d-bar.webp" },
        { id: 3, title: "UX / UI", imageUrl: "../images/projects/UXUI-musee-histoire.webp" },
        { id: 4, title: "Branding", imageUrl: "../images/projects/carte-de-visite.webp" },
    ];

    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    const [preloadedImages, setPreloadedImages] = useState([]);

    useEffect(() => {
        const loadImages = projects.map(project => {
            const img = new Image();
            img.src = project.imageUrl;
            return img;
        });
        setPreloadedImages(loadImages);
    }, []);

    const handleMouseMove = (e) => {
        const image = e.currentTarget.querySelector('img');
        if (image) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - image.width / 2;
            const y = e.clientY - rect.top - image.height / 2;
            image.style.transform = `translate(${x}px, ${y}px)`;
        }
    };

    const handleMouseEnter = (projectId) => {
        setHoveredProjectId(projectId);
    };

    const handleMouseLeave = () => {
        setHoveredProjectId(null);
    };
    const formatTitleForUrl = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <section className='py-28 border-y border-color'>
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="m-auto project-container relative"
                        onMouseEnter={() => handleMouseEnter(project.id)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <TransitionLink
                            href={`/projets/${formatTitleForUrl(project.title)}`}
                            className="text-9xl text-link hover:opacity-75 transition-all"
                        >
                            {project.title}
                        </TransitionLink>
                        {hoveredProjectId === project.id && (
                            <img
                                src={preloadedImages[index].src}
                                alt={project.title}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-300"
                                style={{ zIndex: 2, width: '300px', height: 'auto' }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <Button className="w-60 m-auto my-16" href="/projets" isRounded={false}>
                VOIR MES PROJETS
            </Button>
        </section>
    );
}

export default ProjectTitle;
