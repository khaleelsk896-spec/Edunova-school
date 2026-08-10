import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <motion.div
          className="footer-box"
          whileHover={{ y: -6 }}
        >
          <h2>Citizen English Medium High School</h2>

          <p>
            We are committed to providing quality education,
            strong moral values, discipline and excellence for
            every student.
          </p>

          <div className="social-icons">
            <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }}>
              <FaFacebookF />
            </motion.a>

            <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }}>
              <FaInstagram />
            </motion.a>

            <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }}>
              <FaYoutube />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="footer-box"
          whileHover={{ y: -6 }}
        >
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-box"
          whileHover={{ y: -6 }}
        >
          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> info@citizenschool.com</p>
          <p><FaMapMarkerAlt /> Nellore, Andhra Pradesh</p>
        </motion.div>

      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          © 2026 Citizen English Medium High School.
          All Rights Reserved.
        </p>
      </motion.div>

    </footer>
  );
}

export default Footer;