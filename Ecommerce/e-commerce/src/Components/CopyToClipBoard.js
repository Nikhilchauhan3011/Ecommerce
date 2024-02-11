import React, { useState } from 'react';
import Share from '../Icons/share.png';

const CopyToClipboardButton = () => {
  const copyToClipboard = async () => {
    try {
      const currentUrl = window.location.href;

      // Use the Clipboard API to copy the text to the clipboard
      await navigator.clipboard.writeText(currentUrl);

      alert('URL copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div style={{width:'35px', height:'35px'}} onClick={copyToClipboard}>
        <img src={Share} style={{width:'25px', height:'25px'}}></img>
    </div>
  );
};

export default CopyToClipboardButton;
