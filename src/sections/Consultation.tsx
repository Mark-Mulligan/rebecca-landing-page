// next
import Image from 'next/image';

// framer
import { motion } from 'framer-motion';

// images
import baby from '../images/baby.webp';

// styles
import styles from '../styles/sections/Consultation.module.scss';

const Consultation = () => {
  return (
    <section className={styles.consultationSection}>
      <div className={styles.babyImgWrapper}>
        <Image src={baby} alt="baby" className={styles.babyImg} id="consultation" priority placeholder="blur" />

        <div className={styles.bookBtnWrapper}>
          <button className={styles.bookBtn}>Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
