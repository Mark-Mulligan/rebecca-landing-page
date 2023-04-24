// next
import Image from 'next/image';
import { Oooh_Baby } from 'next/font/google';

// images
import baby from '../images/baby.webp';

// styles
import styles from '../styles/sections/Consultation.module.scss';

const ooohBaby = Oooh_Baby({ weight: '400', subsets: ['latin'] });

const Consultation = () => {
  return (
    <section className={styles.consultationSection}>
      <div className={styles.babyImgWrapper}>
        <Image src={baby} alt="baby" className={styles.babyImg} id="consultation" priority placeholder="blur" />

        <div className={styles.bookBtnWrapper}>
          <button className={`${styles.bookBtn} ${ooohBaby.className}`}>Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
