import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-400 py-8 text-center mt-auto">
      <p>© {new Date().getFullYear()} StarPine. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
