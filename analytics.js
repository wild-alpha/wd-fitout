// lib/analytics.js
import Script from 'next/script';

export function GoogleAnalytics() {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-GHZSFD6F68`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHZSFD6F68', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
