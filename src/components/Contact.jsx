import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="info-icon" />,
    title: "Address",
    text: (
      <>
        Citizen English Medium High School
        <br />
        Nellore, Andhra Pradesh
      </>
    ),
  },
  {
    icon: <FaPhoneAlt className="info-icon" />,
    title: "Phone",
    text: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope className="info-icon" />,
    title: "Email",
    text: "citizenschool@gmail.com",
  },
  {
    icon: <FaClock className="info-icon" />,
    title: "School Timings",
    text: (
      <>
        Monday - Saturday
        <br />
        8:30 AM - 4:00 PM
      </>
    ),
  },
];

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_lzupk3u",
        "template_t6wa8oe",
        e.target,
        "5bmDGMvKFd380UaGw"
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>CONTACT US</span>

        <h2>Get In Touch</h2>

        <p>
          We are always happy to answer your questions regarding admissions,
          academics and school facilities.
        </p>
      </motion.div>

      <div className="contact-container">

        {/* Contact Information */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="info-card"
              whileHover={{ scale: 1.04, y: -5 }}
            >
              {item.icon}

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={!isSending ? { scale: 1.05 } : {}}
            whileTap={!isSending ? { scale: 0.95 } : {}}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success Message */}
          {status === "success" && (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Message sent successfully! We will contact you soon.
            </motion.div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <motion.div
              className="form-error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✕ Message failed to send. Please try again.
            </motion.div>
          )}

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;