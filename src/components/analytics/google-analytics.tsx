'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, ANALYTICS_EVENTS } from './constants';

declare global {
    interface Window {
        gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    }
}

// Função de inicialização do GA4
export const pageview = (path: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
    });
};

// Função para rastrear eventos personalizados
export const trackEvent = (eventName: string, params: Record<string, unknown>) => {
    window.gtag('event', eventName, params);
};

export function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            // Rastrear visualização de página
            pageview(pathname);

            // Capturar parâmetros UTM para atribuir campanhas
            const utmSource = searchParams.get('utm_source');
            const utmMedium = searchParams.get('utm_medium');
            const utmCampaign = searchParams.get('utm_campaign');

            if (utmSource || utmMedium || utmCampaign) {
                trackEvent(ANALYTICS_EVENTS.CAMPAIGN_VISIT, {
                    utm_source: utmSource || '(not set)',
                    utm_medium: utmMedium || '(not set)',
                    utm_campaign: utmCampaign || '(not set)',
                    page_location: pathname
                });
            }
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
                }}
            />
        </>
    );
}