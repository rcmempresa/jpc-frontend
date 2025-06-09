import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/351913823499"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
      aria-label="Chat no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48a11.86 11.86 0 00-18.9 15.3l-1.7 6.2 6.38-1.67a11.85 11.85 0 0014.22-19.83zM12 20a7.97 7.97 0 01-4.11-1.17l-.29-.17-3.31.87.88-3.22-.19-.33a7.98 7.98 0 0112.66-9.95 7.97 7.97 0 01-4.75 13.97zm3.26-5.25l-1.37-.4a.77.77 0 00-.71.18l-.31.3a5.41 5.41 0 01-2.57-2.57l.3-.31a.74.74 0 00.18-.71l-.4-1.37a.75.75 0 00-.68-.53h-.8a.75.75 0 00-.74.74c0 3.1 2.52 5.62 5.63 5.62a.75.75 0 00.75-.75v-.8a.75.75 0 00-.53-.67z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
