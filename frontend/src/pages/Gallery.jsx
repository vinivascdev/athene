import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Gallery() {
  const doenças = [
    { nome: 'Doença de Chagas', imagem: 'https://via.placeholder.com/150' },
    { nome: 'Leishmaniose', imagem: 'https://via.placeholder.com/150' },
    { nome: 'Filariose', imagem: 'https://via.placeholder.com/150' },
  ];

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="p-8 bg-gray-900 min-h-screen text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Galeria Interativa</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {doenças.map((item) => (
          <Card key={item.nome} nome={item.nome} imagem={item.imagem} />
        ))}
      </div>
      <Link to="/" className="block mt-8 underline text-green-400">
        Voltar à Home
      </Link>
    </motion.div>
  );
}

export default Gallery;
