import SectionHeader from "@components/section-header";
import styles from "./styles.module.css";

const OrderOnlineSection = () => {
  return (
    <section id="order-online" className={styles.root}>
      <div className="container">
        <SectionHeader title="Order Online" variant="primary-base" />
        <div className={styles.orderOnlineContent}>
          <p>Apply form for order online</p>
        </div>
      </div>
    </section>
  );
};

export default OrderOnlineSection;
