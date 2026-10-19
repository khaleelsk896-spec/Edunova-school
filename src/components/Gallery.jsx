import { motion } from "framer-motion";

import school from "../assets/School.jpg";
import library from "../assets/library.jpg";
import sports from "../assets/sports.jpg";
import lab from "../assets/lab.jpg";
import smartclassroom from "../assets/smart classroom.jpg";
import annualday from "../assets/annual day.jpg";

const galleryItems = [
  {
    image: school,
    title: "School Campus",
    description: "Modern and peaceful learning environment.",
  },
  {
    image: library,
    title: "Library",
    description: "Thousands of books for knowledge and learning.",
  },
  {
    image: lab,
    title: "Science Laboratory",
    description: "Hands-on practical learning experience.",
  },
  {
    image: sports,
    title: "Sports Activities",
    description: "Indoor and outdoor sports for healthy growth.",
  },
  {
    image: smartclassroom,
    title: "Smart Classroom",
    description: "Digital learning with modern technology.",
  },
  {
    image: annualday,
    title: "Annual Day",
    description: "Celebrating talents and achievements.",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>OUR GALLERY</span>
        <h2>School Life Moments</h2>
        <p>
          Explore our beautiful campus, classrooms, laboratories,
          library and sports activities.
        </p>
      </motion.div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <img src={item.image} alt={item.title} />

            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
