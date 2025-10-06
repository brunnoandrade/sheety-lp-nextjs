'use client';

import { useEffect, useState } from 'react';
import { useAnalytics } from './use-analytics';
import { SCROLL_DEPTHS } from './constants';

export function ScrollTracker() {
    const { trackScrollDepth } = useAnalytics();
    const [trackedDepths, setTrackedDepths] = useState<Set<number>>(new Set());

    useEffect(() => {
        const handleScroll = () => {
            // Calcula a profundidade da rolagem como uma porcentagem
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollPercentage = Math.floor((scrollTop / scrollHeight) * 100);

            // Verifica cada profundidade de rolagem definida
            SCROLL_DEPTHS.forEach(depth => {
                if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
                    // Rastreia a nova profundidade e atualiza o estado
                    trackScrollDepth(depth);
                    setTrackedDepths(prev => new Set([...prev, depth]));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [trackScrollDepth, trackedDepths]);

    // Componente não renderiza nada visualmente
    return null;
}