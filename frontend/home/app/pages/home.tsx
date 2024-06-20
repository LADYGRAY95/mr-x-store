import Navbar from '../components/navbar/navbar';
import About from '../components/about/about';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Services from '../components/services/services';
import { PiArrowElbowUpLeftBold } from 'react-icons/pi';
import Banner from '../components/banner/banner';
import Video from '../components/banner/video';
import Gaming from '../components/products/gaming';
import Gift from '../components/giftcard/gift';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Gaming />
      <Video />
      <Gift />
      <Footer />
    </div>
  );
};

export default Home;