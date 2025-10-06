'use client';

import { ScrollTracker } from "@/components/analytics";
import { ReactNode } from "react";

export default function AnalyticsProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <ScrollTracker />
            {children}
        </>
    );
}