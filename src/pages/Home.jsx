import React from 'react';
import AboutUs from '../components/AboutUs';
import CompletedProjects from '../components/CompletedProjects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import TalkToUs from '../components/TalkToUs';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MainSection />
        <AboutUs />
        <CompletedProjects />
        <TalkToUs />
        <Footer />
      </main>
    );
  }
}

export default Home;
