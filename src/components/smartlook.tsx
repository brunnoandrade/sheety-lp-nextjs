'use client';

import { useEffect } from 'react';
import smartlook from 'smartlook-client';

export function SmartlookAnalytics() {
  useEffect(() => {
    smartlook.init('SEU_ID_DO_SMARTLOOK');
  }, []);

  return null;
}