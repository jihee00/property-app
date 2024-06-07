import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
}

const layout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default layout
