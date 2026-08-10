import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsApp;