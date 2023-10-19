import Navbar from '../components/navbar';
import Slider from '../components/slider';
import Latest from '../components/latest';
import Banner from '../components/banner';
import Giftcard from '../components/giftcard';
import Blog from '../components/blog';
import Footer from '../components/footer';
import '../styles/pages/_home.scss';

function home() {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <Latest />
      <Banner />
      <Giftcard />
      <Blog />
      <Footer />
    </div>
  );
}

export default home;
