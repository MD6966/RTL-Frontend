/* eslint-disable linebreak-style */
import React from 'react';
import './components/App.css';
import './components/swiper.css';
import './components/magnific-popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Copiright from './components/copiright/copiright';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/navbar/nav';
import Tabs from './components/tabs/tabs';
import Textcontainer from './components/textcontainer/textcontainer';

export default function Landing() {
  return (
    <>
      <Nav />
      <Header />
      <Tabs />
      <Textcontainer />
      <Footer />
      <Copiright />
    </>
  );
}
