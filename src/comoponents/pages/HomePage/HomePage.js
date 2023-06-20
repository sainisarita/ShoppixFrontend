import React from 'react';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import ExploreShoppix from './components/ExploreShoppix/ExploreShoppix';
import RingCollection from './components/RingCollection/RingCollection';
import EaringCollection from './components/EaringCollection/EaringCollection';
import ArmaaniQuotes from './components/ArmaaniQuotes/ArmaaniQuotes';
import './HomePage.css';

const HomePage = () => {
  return (
      <div className="homePage">
        <Header />
        <MyNavbar />
        <Card />
        <ExploreShoppix/>
        <RingCollection/>
        <EaringCollection/>
        <ArmaaniQuotes/>
      </div>

  );
}

export default HomePage;
