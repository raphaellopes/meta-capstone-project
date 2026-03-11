import BookingForm from "@components/booking-form";
import SectionHeader from "@components/section-header";

const BookingPage = () => (
  <section id="booking">
    <div className="container">
      <SectionHeader title="Reserve a table" variant="primary-base" />
      <BookingForm />
    </div>
  </section>
);

export default BookingPage;