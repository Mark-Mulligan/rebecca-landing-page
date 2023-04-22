// framer-motion
import { motion } from 'framer-motion';

// styles
import styles from '../styles/sections/LactationServices.module.scss';

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const LactationServices = () => {
  return (
    <section className={styles.lactationServicesSection}>
      <div className={styles.lactationServicesContainer}>
        <h2>Lactation services may help with</h2>
        <motion.ul variants={container} initial="hidden" whileInView="show">
          <motion.li variants={item} transition={{ duration: 1 }}>
            Painful breastfeeding
          </motion.li>
          <motion.li variants={item} transition={{ duration: 1 }}>
            Low milk supply
          </motion.li>
          <motion.li variants={item} transition={{ duration: 1 }}>
            Oversupply or overactive letdown
          </motion.li>
          <motion.li variants={item} transition={{ duration: 1 }}>
            Baby&apos;s slow weight gain or weight loss
          </motion.li>
          <motion.li variants={item} transition={{ duration: 1 }}>
            Assess tongue and lip ties
          </motion.li>
          <motion.li variants={item} transition={{ duration: 1 }}>
            Nipple damage
          </motion.li>
          <motion.li variants={item} transition={{ duration: 1 }}>
            Pumping and flange sizing{' '}
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default LactationServices;
