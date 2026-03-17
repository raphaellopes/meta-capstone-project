import classNames from "classnames";

import styles from "./styles.module.css";
import SophiaImg from "@assets/sophia-avatar.png";
import TomazImg from "@assets/tomaz-avatar.png";
import AmandaImg from "@assets/amanda-avatar.png";
import StarFilledIcon from "@components/icons/star-filled";
import Avatar from "@components/avatar";
import SectionHeader from "@components/section-header";

const testimonials = [
  {
    rate: 5,
    name: "Sophia Martinez",
    quote:
      "Perfect patio vibes for a girls’ night. The food is incredibly fresh and delicious. We’ll definitely be back!",
    image: SophiaImg,
  },
  {
    rate: 5,
    name: "Tomaz Xavier",
    quote:
      "My new favorite spot. Authentic flavors and amazing service. Highly recommend the Bruschetta!",
    image: TomazImg,
  },
  {
    rate: 5,
    name: "Amanda Gabriela",
    quote:
      "The food here is delicious, fresh, and light. It really feels like a escape to a true Mediterranean seaside café.",
    image: AmandaImg,
  },
];

interface RateProps {
  id: string;
  rate: number;
}

const Rate: React.FC<RateProps> = ({ id, rate }) => (
  <div className={styles.rate}>
    {Array.from({ length: rate }, (_, i) => i).map((i) => (
      <StarFilledIcon key={`${id}-${i}`} />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className={styles.root} id="testimonials">
    <div className="container">
      <SectionHeader title="Testimonials" variant="primary-base" titleAs="h2" />
      <div className={classNames(styles.testimonialCards, "grid")}>
        {testimonials.map((testimonial) => (
          <article className={styles.testimonialCard} key={testimonial.name}>
            <Rate id={testimonial.name} rate={testimonial.rate} />
            <div className={styles.testimonialContent}>
              <Avatar src={testimonial.image} alt={testimonial.name} />
              <p className={styles.testimonialName}>{testimonial.name}</p>
            </div>
            <p className={styles.testimonialQuote}>{testimonial.quote}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
