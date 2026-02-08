"use client";

import { useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', 
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    window.history.replaceState(null, '', `#${id}`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sectionIds]);
};