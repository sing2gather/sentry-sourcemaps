import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

// https://docs.sentry.io/platforms/javascript/guides/react/
Sentry.init({
    dsn: 'https://9167dca25467457783c788dc712e7db6@o932368.ingest.sentry.io/5881165',
    environment: 'dev',
    integrations: [new Integrations.BrowserTracing()],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
