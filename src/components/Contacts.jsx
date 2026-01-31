import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Navigation } from 'lucide-react'

const Contacts = () => {
  const handleOpenMap = () => {
    // Открыть карту с адресом
    const address = encodeURIComponent('улица А. Шӯкӯҳӣ 5А')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Контакты
        </motion.h2>

        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8 sm:space-y-10">
            {/* Адрес */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-1">Адрес:</h3>
                <p className="text-xl sm:text-2xl font-bold text-white">улица А. Шӯкӯҳӣ 5А</p>
              </div>
            </motion.div>

            {/* Телефон */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-1">Телефон:</h3>
                <a
                  href="tel:65188"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  6-51-88
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-1">Email:</h3>
                <a
                  href="mailto:info@polytech.school"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 break-all"
                >
                  info@polytech.school
                </a>
              </div>
            </motion.div>
          </div>

          {/* Кнопки действий */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.a
              href="tel:65188"
              className="group px-6 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Позвонить сейчас</span>
            </motion.a>

            <motion.a
              href="mailto:info@polytech.school"
              className="group px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Написать письмо</span>
            </motion.a>

            <motion.button
              onClick={handleOpenMap}
              className="group px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold text-lg shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-3 col-span-1 sm:col-span-2 lg:col-span-1"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation className="w-5 h-5" />
              <span>Открыть карту</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contacts

