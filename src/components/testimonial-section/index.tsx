import './styles.css';
import SophiaImg from '@assets/sophia-avatar.png';
import TomazImg from '@assets/tomaz-avatar.png';
import AmandaImg from '@assets/amanda-avatar.png';
import StarFilledIcon from '@components/icons/star-filled';
import Avatar from '@components/avatar';
import SectionHeader from '../section-header';

const testimonials = [
  {
    rate: 5,
    name: 'Sophia Martinez',
    quote: 'This place is amazing!',
    image: SophiaImg,
  },
  {
    rate: 5,
    name: 'Tomaz Xavier',
    quote: 'Very good food and service',
    image: TomazImg,
  },
  { 
    rate: 5,
    name: 'Amanda Gabriela',
    quote: 'The best place in town',
    image: AmandaImg,
  }
];

interface RateProps {
  id: string;
  rate: number;
}

const Rate:React.FC<RateProps> = ({ id, rate }) => (
  <div className="rate">
    {Array.from({ length: rate }, (_, i) => i).map((i) => (
      <StarFilledIcon key={`${id}-${i}`} />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials">
    <div className="container">
      <SectionHeader title="Testimonials" variant="primary-base" titleAs="h2" />
      <div className="testimonial-cards grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <Rate id={testimonial.name} rate={testimonial.rate} />
            <div className="testimonial-content">
              <Avatar src={testimonial.image} alt={testimonial.name} />
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
            <p className="testimonial-quote">{testimonial.quote}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
