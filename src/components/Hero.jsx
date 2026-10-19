import { motion } from "framer-motion";
import School from "../assets/school.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${school})`,
      }}
    >
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Citizen English <br />
          Medium High School
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Providing Quality Education, Strong Values, Smart Learning,
          Modern Infrastructure and Bright Futures for Every Student.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#about">
            <button className="primary-btn">
              Explore School
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Admission Open
            </button>
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="stat-box">
            <h2>20+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h2>1500+</h2>
            <p>Students</p>
          </div>

          <div className="stat-box">
            <h2>60+</h2>
            <p>Teachers</p>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <p>Result</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
