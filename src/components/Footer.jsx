import Link from 'next/link';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-auto text-white py-4 sticky bottom-0">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <p>1cliQ</p>
          <Link
            href="/admin"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            admin
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <InstagramIcon fontSize="medium" />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <TwitterIcon fontSize="medium" />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600"
          >
            <FacebookIcon fontSize="medium" />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-600"
          >
            <YouTubeIcon fontSize="medium" />
          </Link>
          <Link
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <WhatsAppIcon fontSize="medium" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
