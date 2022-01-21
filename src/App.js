import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
