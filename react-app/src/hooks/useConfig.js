import { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────
//  useConfig — reads config from ONE place only:
//  public/business_config.js  (loaded as a <script> in index.html)
//
//  Priority:
//    1. localStorage  (set by Admin Panel saves)
//    2. window.BUSINESS_CONFIG  (the default values in business_config.js)
//
//  To update defaults → edit public/business_config.js ONLY.
//  No need to touch this file ever again.
// ─────────────────────────────────────────────────────────────

function loadConfig() {
  // Use the getActiveConfig helper defined in public/business_config.js
  // It already handles localStorage → fallback to BUSINESS_CONFIG
  if (typeof window !== 'undefined' && typeof window.getActiveConfig === 'function') {
    return window.getActiveConfig();
  }
  // Safety fallback if script hasn't loaded yet
  return {};
}

export function useConfig() {
  const [config, setConfig] = useState(loadConfig);

  useEffect(() => {
    // Re-read config whenever the Admin Panel saves in another tab
    const handleStorage = (e) => {
      if (e.key === 'evoke_business_config') {
        setConfig(loadConfig());
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return config;
}
