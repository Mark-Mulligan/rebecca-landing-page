// react
import { useRef } from 'react';

// next
import Image from 'next/image';

// framer-motion
import { useInView } from 'framer-motion';

// images
import baby1 from '../images/baby1.webp';
import baby2 from '../images/baby2.webp';
import baby3 from '../images/baby3.webp';

// styles
import styles from '../styles/sections/Services.module.scss';

const Services = () => {
  const imgRef1 = useRef<HTMLImageElement | null>(null);
  const imgRef2 = useRef<HTMLImageElement | null>(null);
  const imgRef3 = useRef<HTMLImageElement | null>(null);

  const img1InView = useInView(imgRef1);
  const img2InView = useInView(imgRef2);
  const img3InView = useInView(imgRef3);

  return (
    <section className={styles.ourServicesSection} id="services">
      <div className={styles.ourServices}>
        <h2>Our Services</h2>

        <div className={styles.babyCard}>
          <Image
            src={baby1}
            alt="baby1"
            ref={imgRef1}
            className={styles.img}
            style={{
              transform: img1InView ? 'scale(1)' : 'scale(0.9)',
              opacity: img1InView ? 1 : 0,
              transition: 'all 0.6s',
            }}
          />

          <div className={styles.titleWrapper}>
            <h4>Initial Consultation</h4>
          </div>
        </div>

        <div className={styles.babyCard}>
          <Image
            src={baby2}
            alt="baby2"
            ref={imgRef2}
            className={styles.img}
            style={{
              transform: img2InView ? 'scale(1)' : 'scale(0.9)',
              opacity: img2InView ? 1 : 0,
              transition: 'all 0.6s',
            }}
          />

          <div className={styles.titleWrapper}>
            <h4>Follow Up Consultation</h4>
          </div>
        </div>

        <div className={styles.babyCard}>
          <Image
            src={baby3}
            alt="baby3"
            ref={imgRef3}
            className={styles.img}
            style={{
              transform: img3InView ? 'scale(1)' : 'scale(0.9)',
              opacity: img3InView ? 1 : 0,
              transition: 'all 0.6s',
            }}
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
