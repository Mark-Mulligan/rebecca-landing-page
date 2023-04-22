import { motion } from 'framer-motion';

// images
import baby from '../images/baby.png';

// styles
import styles from '../styles/sections/Consultation.module.scss';

const Consultation = () => {
  return (
    <section className={styles.consultationSection}>
      <div className={styles.babyImgWrapper}>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={baby.src}
          alt="baby"
          className={styles.babyImg}
          id="consultation"
        />
        <div className={styles.bookBtnWrapper}>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.bookBtn}
          >
            Book a Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
