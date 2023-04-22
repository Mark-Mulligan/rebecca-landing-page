// React
import { useRef } from 'react';

// framer-motion
import { motion, useInView } from 'framer-motion';

// images
import becca from '../images/becca.jpg';

// styles
import styles from '../styles/sections/About.module.scss';

const About = () => {
  const p1Ref = useRef<HTMLParagraphElement | null>(null);
  const p2Ref = useRef<HTMLParagraphElement | null>(null);
  const p3Ref = useRef<HTMLParagraphElement | null>(null);

  const p1InView = useInView(p1Ref, { once: true });
  const p2InView = useInView(p2Ref, { once: true });
  const p3InView = useInView(p3Ref, { once: true });

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <h2>About Rebecca Loving, IBCLC</h2>

        <p
          style={{
            transform: p1InView ? 'none' : 'translateX(50px)',
            opacity: p1InView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
          ref={p1Ref}
        >
          Mrs. Loving is a professional lactation consultant, certified by the International Board of Lactation
          Consultant Examiners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </p>

        <div className={styles.beccaContainer}>
          <div>
            <p
              style={{
                transform: p2InView ? 'none' : 'translateX(50px)',
                opacity: p2InView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
              }}
              ref={p2Ref}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur amet, consectetur adipiscing elit, sed do eiusmod{' '}
            </p>
            <p
              style={{
                transform: p3InView ? 'none' : 'translateX(50px)',
                opacity: p3InView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
              }}
              ref={p3Ref}
            >
              Mrs. Loving is a professional lactation consultant, certified by the International Board of Lactation
              Consultant Examiners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
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
