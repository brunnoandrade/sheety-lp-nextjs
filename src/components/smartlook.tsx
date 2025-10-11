'use client';

import { useEffect } from 'react';
import smartlook from 'smartlook-client';

export function SmartlookAnalytics() {
    useEffect(() => {
        smartlook.init(
            process.env.NEXT_PUBLIC_SMARTLOOK_ID || ""
        );
    }, []);

    return null;
}