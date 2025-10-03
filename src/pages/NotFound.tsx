import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  )
}

export default NotFound