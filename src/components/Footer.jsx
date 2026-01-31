import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="container mx-auto text-center">
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          Polytech School © 2026
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer

