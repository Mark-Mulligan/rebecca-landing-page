// next
import Image from 'next/image';

// framer
import { motion } from 'framer-motion';

// images
import baby from '../images/baby.jpg';

// styles
import styles from '../styles/sections/Consultation.module.scss';

const Consultation = () => {
  return (
    <section className={styles.consultationSection}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.babyImgWrapper}
      >
        <Image src={baby} alt="baby" className={styles.babyImg} id="consultation" priority placeholder="blur" />

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
      </motion.div>
    </section>
  );
};

export default Consultation;
