import React from 'react';

export default function Footer() {
    const handleRedirect = () => {
        const redirectUrl = 'https://github.com/exitarr'; 
        chrome.tabs.create({ url: redirectUrl });
      };
  return (
    <footer>
      <p>
        Created by{' '}
        <button type="button" onClick={handleRedirect}>
          Exitarr
        </button>
      </p>
    </footer>
  );
}
