import { motion } from "framer-motion";
import {
  FaBook,
  FaLaptopCode,
  FaFlask,
  FaFutbol,
  FaChalkboardTeacher,
  FaMusic,
} from "react-icons/fa";

const academicsData = [
  {
    icon: <FaBook className="academic-icon" />,
    title: "Primary Education",
    desc: "Strong foundation with activity-based learning and personal attention for every child.",
  },
  {
    icon: <FaChalkboardTeacher className="academic-icon" />,
    title: "High School",
    desc: "Comprehensive curriculum designed for academic excellence and future success.",
  },
  {
    icon: <FaLaptopCode className="academic-icon" />,
    title: "Computer Lab",
    desc: "Modern computer laboratory with digital learning facilities and practical sessions.",
  },
  {
    icon: <FaFlask className="academic-icon" />,
    title: "Science Lab",
    desc: "Well-equipped laboratories for Physics, Chemistry and Biology practical learning.",
  },
  {
    icon: <FaFutbol className="academic-icon" />,
    title: "Sports",
    desc: "Indoor and outdoor games that encourage teamwork, fitness and healthy competition.",
  },
  {
    icon: <FaMusic className="academic-icon" />,
    title: "Co-Curricular",
    desc: "Dance, music, drawing, public speaking and cultural activities for overall development.",
  },
];

function Academics() {
  return (
    <section id="academics" className="academics">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>OUR ACADEMICS</span>
        <h2>Learning Beyond The Classroom</h2>
        <p>
          We provide a balanced education that develops knowledge,
          creativity, discipline, confidence and leadership skills.
        </p>
      </motion.div>

      <div className="academics-grid">
        {academicsData.map((item, index) => (
          <motion.div
            key={index}
            className="academic-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Academics;