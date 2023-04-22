// framer-motion
import { motion } from 'framer-motion';

// images
import babyFeet from '../images/baby-feet.jpeg';

// styles
import styles from '../styles/sections/Appointments.module.scss';

const Appointments = () => {
  return (
    <section id="appointments" className={styles.appointments}>
      <div className={styles.appointmentsContainer}>
        <h2>Appointments</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.detailsCard}
          style={{ background: '#F4ECE0' }}
        >
          <h4>What I Will Do for You</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur amet, consectetur adipiscing elit, sed do eiusmod{' '}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.detailsCard}
          style={{ background: '#F4ECE0' }}
        >
          <h4>Appointment Availability</h4>
          <p>Available office days, times - i.e. Monday 8:00 am - 5:00 pm</p>
          <p>View Calendar</p>
        </motion.div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 25, y: -25 }}
              transition={{ duration: 0.75 }}
              className={styles.background1}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className={styles.background2}
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: -25, y: 25 }}
              transition={{ duration: 0.75 }}
              className={styles.babyFeet}
              src={babyFeet.src}
              alt="baby feet"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
