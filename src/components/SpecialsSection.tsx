import GreekSaladImg from "../assets/greek-salad.jpg";
import LemonDessertImg from "../assets/lemon-dessert.jpg";

const specials = [
  {
    id: "greek-salad",
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: GreekSaladImg,
  },
  {
    id: "burscheta",
    title: 'Burscheta',
    price: '$10.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: GreekSaladImg,
  },
  {
    id: "lemon-dessert",
    title: 'Lemon Dessert',
    price: '$11.99',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: LemonDessertImg,
  }
];

const SpecialsSection = () => (
  <section id="specials">
    <div className="container" >
      <header className="special-header">
        <h2 className="special-header-title">This week specials</h2>
        <button>Online Menu</button>
      </header>
      <div className="special-cards grid">
        {specials.map((special) => (
          <article className="special-card" key={special.id}>
            <div className="special-wrap-img">
              <img src={special.image} alt={special.title} />
            </div>
            <div className="special-header">
              <h3 className="special-title">{special.title}</h3>
              <p className="special-price">{special.price}</p>
            </div>
            <p className="special-description">{special.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialsSection;