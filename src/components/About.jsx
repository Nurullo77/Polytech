import { motion } from 'framer-motion'
import { GraduationCap, Laptop, Users } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Инновационное обучение',
      description: 'Современные методики преподавания и актуальные программы, которые готовят к реальным вызовам будущего.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Laptop,
      title: 'Технологическая среда',
      description: 'Оборудованные классы с новейшими технологиями и доступ к современным образовательным ресурсам.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Поддержка учеников',
      description: 'Индивидуальный подход к каждому ученику и постоянная поддержка на пути к достижению целей.',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          О школе
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                className="group perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-full p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 transform-3d transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget
                    const rect = card.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const centerX = rect.width / 2
                    const centerY = rect.height / 2
                    const rotateX = (y - centerY) / 10
                    const rotateY = (centerX - x) / 10
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
                  }}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${card.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

