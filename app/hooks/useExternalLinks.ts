import { useEffect } from 'react';
import { normalizeExternalLink } from '../utils/linkUtils';

/**
 * A hook that scans the document for links and applies normalization to external ones.
 * Useful for pages with dynamic content or when components mount/unmount.
 */
export const useExternalLinks = () => {
  useEffect(() => {
    const handleExternalLinks = () => {
      const allLinks = Array.from(document.querySelectorAll('a'));
      allLinks.forEach(normalizeExternalLink);
    };

    // Run once on mount
    handleExternalLinks();

    // Optional: If the app is a SPA and content changes frequently, 
    // you might want to re-run this on specific triggers.
  }, []);
};
