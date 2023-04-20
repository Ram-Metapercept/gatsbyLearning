import React from 'react';

import Header from './Header';
import Footer from './Footer';
import  './layout.css';

function Layout({ children }) {
  return (
    <div className="container">
  <div className='content'>
      <Header />
      {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
