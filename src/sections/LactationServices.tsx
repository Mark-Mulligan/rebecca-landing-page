// React
import { useRef } from 'react';

// framer-motion
import { useInView } from 'framer-motion';

// styles
import styles from '../styles/sections/LactationServices.module.scss';

const LactationServices = () => {
  const ulRef = useRef<HTMLUListElement | null>(null);
  const ulInView = useInView(ulRef);

  return (
    <section className={styles.lactationServicesSection}>
      <div className={styles.lactationServicesContainer}>
        <h2>Lactation services may help with</h2>
        <ul
          ref={ulRef}
          style={{
            opacity: ulInView ? 1 : 0,
            transition: 'all 0.8s',
          }}
        >
          <li>Painful breastfeeding</li>
          <li>Low milk supply</li>
          <li>Oversupply or overactive letdown</li>
          <li>Baby&apos;s slow weight gain or weight loss</li>
          <li>Assess tongue and lip ties</li>
          <li>Nipple damage</li>
          <li>Pumping and flange sizing </li>
        </ul>
      </div>
    </section>
  );
};

export default LactationServices;
