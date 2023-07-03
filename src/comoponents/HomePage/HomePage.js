import React from 'react';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import ExploreShoppix from './components/ExploreShoppix/ExploreShoppix';
import RingCollection from './components/RingCollection/RingCollection';
import EaringCollection from './components/EaringCollection/EaringCollection';
import ArmaaniQuotes from './components/ArmaaniQuotes/ArmaaniQuotes';
import Trending from './components/Trending/Trending';
import TrendingRing from './components/TrendingRing/TrendingRing';
import TrendingEaring from './components/TrendingEaring/TrendingEaring';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import CommunitySection from './components/communitySection/CommunitySection';
import AboutShoppix from './components/AboutShoppix/AboutShoppix';
import Footer from './components/Footer/Footer';
import './HomePage.css';
import Alertmessage from './components/Alert/Alert';

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
        <Trending/>
        <TrendingRing/>
        <TrendingEaring/>
        <TestimonialsSection/>
        <CommunitySection/>
        <AboutShoppix/>
        <Footer/>
        <Alertmessage/>
      </div>

  );
}

export default HomePage;
