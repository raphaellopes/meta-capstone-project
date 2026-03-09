const testimonials = [
  {
    rate: 5,
    name: 'John Doe',
    quote: 'This place is amazing!'
  }
];

const TestimonialsSection = () => (
  <section>
    <div>
      <header>
        <h2>Testimonials</h2>
      </header>
    </div>
    <div>
      {testimonials.map((testimonial) => (
        <article key={testimonial.name}>
          <div>{testimonial.rate}</div>
          <div>
            <div>add avatar</div>
            <p>{testimonial.name}</p>
          </div>
          <p>{testimonial.quote}</p>
        </article>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
