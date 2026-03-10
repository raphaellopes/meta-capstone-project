import './styles.css';
import About1Img from '@assets/about-restaurant-a.png';
import About2Img from '@assets/about-restaurant-b.png';

const AboutSection = () => (
  <section id="about">
    <div className="container">
      <div className="about-box">
        <h2 className="about-title">Little Lemon</h2>
        <p className="about-subtitle">Chicago</p>
        <p className="about-description">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
      </div>
      <div className="about-img-wrapper">
        <img className="about-img-top" src={About1Img} alt="Restaurant owner talking to the chef about food" />
        <img className="about-img-bottom" src={About2Img} alt="Restaurant owner smilling with the chef" />
      </div>
    </div>
  </section>
);

export default AboutSection;