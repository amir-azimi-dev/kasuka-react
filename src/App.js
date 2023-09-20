import './App.scss';
import Header from './Header/Header';
import AboutKasuka from './AboutKasuka/AboutKasuka';
import PropsLogos from './PropsLogos/PropsLogos';
import Ads from './Ads/Ads';
import Services from './Services/Services';
import Summons from './Summons/Summons';
import SampleWorks from './SampleWorks/SampleWorks';
import Counter from './Counter/Counter';
import Quote from './Quote/Quote';
import Team from './Team/Team';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

function App() {
  return (
    <div id="app">
      <Header />
      <AboutKasuka />
      <PropsLogos />
      <Ads />
      <Services />
      <Summons />
      <SampleWorks />
      <Counter />
      <Quote />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
