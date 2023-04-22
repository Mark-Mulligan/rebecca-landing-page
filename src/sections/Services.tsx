// framer-motion
import { motion } from 'framer-motion';

// images
import baby1 from '../images/baby1.png';
import baby2 from '../images/baby2.png';
import baby3 from '../images/baby3.png';

// styles
import styles from '../styles/sections/Services.module.scss';

const Services = () => {
  return (
    <section className={styles.ourServicesSection} id="services">
      <div className={styles.ourServices}>
        <h2>Our Services</h2>

        <div className={styles.babyCard}>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={baby1.src}
            alt="baby1"
          />
          <div className={styles.titleWrapper}>
            <h4>Initial Consultation</h4>
          </div>
        </div>

        <div className={styles.babyCard}>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={baby2.src}
            alt="baby1"
          />
          <div className={styles.titleWrapper}>
            <h4>Follow Up Consultation</h4>
          </div>
        </div>

        <div className={styles.babyCard}>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={baby3.src}
            alt="baby1"
          />
          <div className={styles.titleWrapper}>
            <h4>Back to Work Consultation</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
