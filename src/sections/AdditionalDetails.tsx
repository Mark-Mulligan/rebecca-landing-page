// react
import { useRef } from 'react';

// framer-motion
import { useInView } from 'framer-motion';

// styles
import styles from '../styles/sections/AdditionalDetails.module.scss';

const AdditionalDetails = () => {
  const item1Ref = useRef<HTMLLIElement | null>(null);
  const item2Ref = useRef<HTMLLIElement | null>(null);
  const item3Ref = useRef<HTMLLIElement | null>(null);

  const item1InView = useInView(item1Ref);
  const item2InView = useInView(item2Ref);
  const item3InView = useInView(item3Ref);

  return (
    <section className={styles.additionalDetails}>
      <h2>Additional Details</h2>
      <ul style={{ maxWidth: 800, margin: 'auto' }}>
        <li
          ref={item1Ref}
          style={{
            opacity: item1InView ? 1 : 0,
            transition: 'all 0.6s',
            background: '#CABAB1',
          }}
          className={styles.detailsCard}
        >
          <h4>Payment</h4>
          <p>
            Payment is due at the apponitment. You may use your Flexible or Health Spending Account, debit/credit card,
            check or cash. A superbill will be provided to submit to your insurance copany for reimbursement. Insurane
            reimbursement is not guaranteed but most companies provide lactation services
          </p>
        </li>
        <li
          ref={item2Ref}
          style={{
            opacity: item2InView ? 1 : 0,
            transition: 'all 0.6s',
            background: '#E7C0A3',
          }}
          className={styles.detailsCard}
        >
          <h4>Cancellation Policy</h4>
          <p>If possible, please call, text or email within 24 hours if you need to reschedule or cancel.</p>
        </li>
        <li
          ref={item3Ref}
          style={{
            opacity: item3InView ? 1 : 0,
            transition: 'all 0.6s',
            background: '#dec5a1',
          }}
          className={styles.detailsCard}
          id="contact"
        >
          <h4>Contact Information</h4>
          <p>Rebecca Loving, RN, BSN, IBCLC</p>
          <p>Lactation Consultant</p>
          <p>Address Line 1</p>
          <p>Address Line 2</p>
          <p>Phone number</p>
          <p>Email</p>
        </li>
      </ul>
    </section>
  );
};

export default AdditionalDetails;
