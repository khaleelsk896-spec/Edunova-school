import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="nav-container">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <FaGraduationCap className="logo-icon" />

            <div>
              <h2>Citizen School</h2>
              <span>English Medium High School</span>
            </div>
          </motion.div>

          <ul className="nav-links">
            {["Home", "About", "Academics", "Gallery", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ y: -3 }}
                >
                  <a href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>

          <motion.button
            className="admission-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "#contact")}
          >
            Admission Open
          </motion.button>

          <div
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      <motion.div
        className={menuOpen ? "mobile-menu active" : "mobile-menu"}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#academics" onClick={closeMenu}>Academics</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <button
          className="mobile-btn"
          onClick={() => {
            closeMenu();
            window.location.href = "#contact";
          }}
        >
          Admission Open
        </button>
      </motion.div>
    </>
  );
}

export default Navbar;