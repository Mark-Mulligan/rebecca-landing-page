// framer-motion
import { motion } from 'framer-motion';

// images
import becca from '../images/becca.jpg';

// styles
import styles from '../styles/sections/About.module.scss';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <h2>About Rebecca Loving, IBCLC</h2>

        <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          Mrs. Loving is a professional lactation consultant, certified by the International Board of Lactation
          Consultant Examiners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </motion.p>

        <div className={styles.beccaContainer}>
          <div>
            <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur amet, consectetur adipiscing elit, sed do eiusmod{' '}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              Mrs. Loving is a professional lactation consultant, certified by the International Board of Lactation
              Consultant Examiners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.becca}
            src={becca.src}
            alt="Rebecca Loving"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
