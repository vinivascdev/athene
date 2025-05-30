import { motion } from 'framer-motion';
import './Card.css';

function Card({ nome, imagem }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      <img src={imagem} alt={nome} className="card-image" />
      <h3 className="card-title">{nome}</h3>
    </motion.div>
  );
}

export default Card;
