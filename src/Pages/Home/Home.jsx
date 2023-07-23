import React from 'react';
import NavBar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/footer';
import Banner from '../Banner/Banner';
import Classes from './Classes';
import Gallery from '../Gallery';
import Research from '../Research';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Banner></Banner>
          <Classes></Classes>
          <Gallery></Gallery>
          <Research></Research>
          <Reviews></Reviews>
          <Footer></Footer>
        </div>
    );
};

export default Home;