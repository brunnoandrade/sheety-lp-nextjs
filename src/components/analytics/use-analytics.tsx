'use client';

import { trackEvent } from './google-analytics';
import { ANALYTICS_EVENTS } from './constants';

export function useAnalytics() {
    // Eventos de conversão principais
    const trackSignUp = (email: string) => {
        trackEvent(ANALYTICS_EVENTS.SIGN_UP, {
            method: 'email',
            email_domain: email.split('@')[1],
        });
    };

    const trackFormOpen = () => {
        trackEvent(ANALYTICS_EVENTS.FORM_OPEN, {
            form_name: 'typeform_waitlist',
        });
    };

    const trackFormSubmit = () => {
        trackEvent(ANALYTICS_EVENTS.FORM_SUBMIT, {
            form_name: 'typeform_waitlist',
            form_destination: 'typeform',
        });
    };

    const trackFormClose = (completed: boolean) => {
        trackEvent(ANALYTICS_EVENTS.FORM_CLOSE, {
            form_name: 'typeform_waitlist',
            form_completed: completed,
        });
    };

    const trackDemoVideoPlay = () => {
        trackEvent(ANALYTICS_EVENTS.VIDEO_START, {
            video_name: 'demo_video',
        });
    };

    const trackDemoVideoClose = () => {
        trackEvent(ANALYTICS_EVENTS.VIDEO_CLOSE, {
            video_name: 'demo_video',
        });
    };

    const trackFeatureClick = (featureName: string) => {
        trackEvent(ANALYTICS_EVENTS.FEATURE_CLICK, {
            feature_name: featureName,
        });
    };

    const trackScrollDepth = (depth: number) => {
        trackEvent(ANALYTICS_EVENTS.SCROLL_MILESTONE, {
            scroll_depth: depth,
        });
    };

    // Evento para rastrear origem da campanha manualmente
    const trackCampaignClick = (source: string, medium: string, campaign: string) => {
        trackEvent(ANALYTICS_EVENTS.CAMPAIGN_CLICK, {
            utm_source: source,
            utm_medium: medium,
            utm_campaign: campaign,
        });
    };

    return {
        trackSignUp,
        trackFormOpen,
        trackFormSubmit,
        trackFormClose,
        trackDemoVideoPlay,
        trackDemoVideoClose,
        trackFeatureClick,
        trackScrollDepth,
        trackCampaignClick,
    };
}