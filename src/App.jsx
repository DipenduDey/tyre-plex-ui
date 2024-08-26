import React from 'react';
import Header from './Components/Header';
import Shop from './Components/Shop';
import Deals from './Components/Deals';
import Services from './Components/Services';
import Dealers from './Components/Dealers';
import Payment from './Components/Payment';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Shop />
        <Deals />
        <Services />
        <Dealers />
        <Payment />
        <Footer />
      </main>
    </div>
  );
}

export default App;