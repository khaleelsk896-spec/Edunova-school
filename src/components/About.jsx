import { motion } from "framer-motion";
import principal from "../assets/principal.jpg";
import {
  FaSchool,
  FaBookOpen,
  FaAward,
  FaUserGraduate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSchool className="feature-icon" />,
    title: "Modern Campus",
    desc: "Clean, safe and student-friendly learning environment.",
  },
  {
    icon: <FaBookOpen className="feature-icon" />,
    title: "Quality Education",
    desc: "Experienced teachers with innovative teaching methods.",
  },
  {
    icon: <FaAward className="feature-icon" />,
    title: "Excellent Results",
    desc: "Consistent academic performance and student achievements.",
  },
  {
    icon: <FaUserGraduate className="feature-icon" />,
    title: "Student Development",
    desc: "Focus on academics, discipline, leadership and confidence.",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={principal} alt="Principal" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">ABOUT OUR SCHOOL</span>

          <h2>Citizen English Medium High School</h2>

          <p>
            Citizen English Medium High School is committed to providing
            quality education with discipline, innovation, and moral values.
            We believe every child has unique potential, and our mission is
            to help students become confident, knowledgeable, and responsible
            citizens of tomorrow.
          </p>

          <p>
            Our experienced teachers, modern classrooms, science laboratories,
            computer education, sports facilities, and student-centered
            teaching methods ensure overall academic and personal development.
          </p>

          <div className="about-features">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;