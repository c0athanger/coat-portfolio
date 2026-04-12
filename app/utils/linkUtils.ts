/**
 * Checks if a URL is an external link relative to the current host.
 */
export const isExternalLink = (href: string, host: string): boolean => {
  try {
    const url = new URL(href, window.location.origin);
    return url.host !== host;
  } catch (e) {
    // If it's a relative path or invalid URL, it's not an external link
    return false;
  }
};

/**
 * Applies target="_blank" and rel="noopener noreferrer" to an anchor element if it's an external link.
 */
export const normalizeExternalLink = (link: HTMLAnchorElement): void => {
  if (link.host !== window.location.host) {
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('target', '_blank');
  }
};
