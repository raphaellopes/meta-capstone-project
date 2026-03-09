const testimonials = [
  {
    rate: 5,
    name: 'John Doe',
    quote: 'This place is amazing!',
  },
  {
    rate: 5,
    name: 'Jane Doe',
    quote: 'Very good food and service',
  },
  { 
    rate: 5,
    name: 'Sophia Martinez',
    quote: 'The best place in town',
  }
];

const TestimonialsSection = () => (
  <section>
    <div className="container">
      <header>
        <h2>Testimonials</h2>
      </header>
      <div className="testimonial-cards grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-rate">{testimonial.rate}</div>
            <div className="testimonial-content">
              <div className="testimonial-avatar-wrapper">add avatar</div>
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
