import PageContainer from "@components/page-container";
import styles from "./styles.module.css";

const OrderOnlineSection = () => {
  return (
    <PageContainer id="order-online" title="Order Online">
      <div className={styles.orderOnlineContent}>
        <p>Apply form for order online</p>
      </div>
    </PageContainer>
  );
};

export default OrderOnlineSection;
