// react
import { useRef } from 'react';

// Next
import Image from 'next/image';

// framer-motion
import { useInView } from 'framer-motion';

// images
import babyFeet from '../images/baby-feet.webp';

// styles
import styles from '../styles/sections/Appointments.module.scss';

const Appointments = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgDiv1 = useRef<HTMLDivElement | null>(null);
  const imgDiv2 = useRef<HTMLDivElement | null>(null);
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);

  const imgInView = useInView(imgRef);
  const imgDiv1InView = useInView(imgDiv1);
  const imgDiv2InView = useInView(imgDiv2);
  const div1InView = useInView(div1Ref);
  const div2InView = useInView(div2Ref);
  const div3InView = useInView(div3Ref);

  return (
    <section id="appointments" className={styles.appointments}>
      <div className={styles.appointmentsContainer}>
        <h2>Appointments</h2>

        <div
          ref={div1Ref}
          style={{
            opacity: div1InView ? 1 : 0,
            transition: 'all 0.6s',
            background: '#F4ECE0',
          }}
          className={styles.detailsCard}
        >
          <h4>What I Will Do for You</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur amet, consectetur adipiscing elit, sed do eiusmod{' '}
          </p>
        </div>

        <div
          ref={div2Ref}
          style={{
            opacity: div2InView ? 1 : 0,
            transition: 'all 0.6s',
          }}
          className={styles.appointmentPrep}
        >
          <div className={styles.outerBox1} />
          <div className={styles.outerBox2} />
          <h4>Preparing For Your Appointment</h4>
          <ul>
            <li>Consent Form</li>
            <li>Intake History</li>
          </ul>
          <p>You may download or complete at time of consult. </p>
          <p className={styles.bold}>
            Plan feedings prior to your appointment so your baby will be hungry, awake when we meet.{' '}
          </p>
        </div>

        <div
          ref={div3Ref}
          style={{
            opacity: div3InView ? 1 : 0,
            transition: 'all 0.6s',
            background: '#F4ECE0',
          }}
          className={styles.detailsCard}
        >
          <h4>Appointment Availability</h4>
          <p>Available office days, times - i.e. Monday 8:00 am - 5:00 pm</p>
          <p>View Calendar</p>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div
              ref={imgDiv1}
              style={{
                transform: imgDiv1InView ? 'translate(25px, -25px)' : 'none',
                opacity: imgDiv1InView ? 1 : 0,
                transition: 'all 0.75s',
              }}
              className={styles.background1}
            />
            <div
              ref={imgDiv2}
              style={{
                opacity: imgDiv2InView ? 1 : 0,
                transition: 'all 0.75s',
              }}
              className={styles.background2}
            />
            <Image
              src={babyFeet}
              alt="baby feet"
              ref={imgRef}
              className={styles.babyFeet}
              style={{
                transform: imgInView ? 'translate(-25px, 25px)' : 'none',
                opacity: imgInView ? 1 : 0,
                transition: 'all 0.75s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
