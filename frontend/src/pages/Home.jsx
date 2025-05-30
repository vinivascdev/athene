import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
    >
      <h1 className="text-4xl font-bold mb-8">Arte sob o Microscópio</h1>
      <p className="mb-8">Doenças Tropicais Negligenciadas</p>
      <Link to="/gallery">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-green-600 rounded-lg shadow-lg"
        >
          Entrar na Exposição
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
