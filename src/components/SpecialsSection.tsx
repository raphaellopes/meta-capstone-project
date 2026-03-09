const specials = [
  {
    id: "greek-salad",
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  }
];

const SpecialsSection = () => (
  <section>
    <div>
      <header>
        <h2>This week specials</h2>
        <button>Online Menu</button>
      </header>
    </div>
    <div>
      {specials.map((special) => (
        <article key={special.id}>
          <div>add image</div>
          <div>
            <h3>{special.title}</h3>
            <p>{special.price}</p>
          </div>
          <p>{special.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default SpecialsSection;