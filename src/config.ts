
/**
 * Public frontend configuration.
 * Never store OAuth secrets, access tokens, or other secrets here.
 */
export const FRONTEND_CONFIG = {
  appName: 'SJST Seva',
  environment: 'PRODUCTION',

  // Used only to retrieve the public configuration.
  configBootstrapUrl:
    'https://script.google.com/macros/s/AKfycbwmQaBmXInyByFdDIdEg27w_q19uOY-P-aVv541V9_XwmM_UgTngY9eM33Uagna-n0w/exec',

  assets: {
    logoPath: 'images/Logo.jpeg',
    watermarkPath: 'images/Watermark.jpeg',
  },
} as const;
