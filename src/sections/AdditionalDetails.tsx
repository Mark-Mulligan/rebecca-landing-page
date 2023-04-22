// framer-motion
import { motion } from 'framer-motion';

// styles
import styles from '../styles/sections/AdditionalDetails.module.scss';

const AdditionalDetails = () => {
  return (
    <section className={styles.additionalDetails}>
      <h2>Additional Details</h2>
      <ul style={{ maxWidth: 800, margin: 'auto' }}>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.detailsCard}
          style={{ background: '#CABAB1' }}
        >
          <h4>Payment</h4>
          <p>
            Payment is due at the apponitment. You may use your Flexible or Health Spending Account, debit/credit card,
            check or cash. A superbill will be provided to submit to your insurance copany for reimbursement. Insurane
            reimbursement is not guaranteed but most companies provide lactation services
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.detailsCard}
          style={{ background: '#E7C0A3' }}
        >
          <h4>Cancellation Policy</h4>
          <p>If possible, please call, text or email within 24 hours if you need to reschedule or cancel.</p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.detailsCard}
          style={{ background: '#dec5a1' }}
          id="contact"
        >
          <h4>Contact Information</h4>
          <p>Rebecca Loving, RN, BSN, IBCLC</p>
          <p>Lactation Consultant</p>
          <p>Address Line 1</p>
          <p>Address Line 2</p>
          <p>Phone number</p>
          <p>Email</p>
        </motion.li>
      </ul>
    </section>
  );
};

export default AdditionalDetails;
