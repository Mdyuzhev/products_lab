import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, GraduationCap, MapPin, Users, ExternalLink } from 'lucide-react'

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partners = [
    {
      name: 'Ростелеком',
      type: 'Индустриальный партнёр',
      description: 'Крупнейший провайдер цифровых услуг и решений в России',
      role: 'Источник продуктовых гипотез, менторство, экспертиза',
      color: 'blue',
      url: 'https://www.company.rt.ru/'
    },
    {
      name: 'Сириус',
      type: 'Образовательный центр',
      description: 'Федеральная территория для развития талантливой молодёжи',
      role: 'Хакатоны, интенсивы, образовательные программы',
      color: 'violet',
      url: 'https://siriusuniversity.ru/'
    },
    {
      name: 'СПбПУ Политех',
      type: 'Университет',
      description: 'Ведущий технический университет Санкт-Петербурга',
      role: 'Практики, ВКР, курсовые проекты',
      color: 'orange',
      url: 'https://www.spbstu.ru/'
    }
  ]

  const colorClasses = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', icon: 'bg-blue-500/20' },
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', icon: 'bg-violet-500/20' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', icon: 'bg-orange-500/20' }
  }

  const stats = [
    { icon: Building2, value: '1', label: 'Корпорация', color: 'text-blue-400' },
    { icon: GraduationCap, value: '5+', label: 'ВУЗов', color: 'text-violet-400' },
    { icon: MapPin, value: '10+', label: 'Городов', color: 'text-orange-400' },
    { icon: Users, value: '100+', label: 'Студентов', color: 'text-pink-400' }
  ]

  return (
    <section id="partners" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-slate-950 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Экосистема
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text from-blue-400 via-violet-400 to-orange-400">Партнёры</span> программы
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Объединяем бизнес и образование для создания инновационных решений
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className={`text-3xl font-display font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Partner cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const colors = colorClasses[partner.color]
            return (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`group p-8 rounded-3xl ${colors.bg} border ${colors.border} card-hover cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center`}>
                    {partner.color === 'blue' ? (
                      <Building2 className={colors.text} size={28} />
                    ) : (
                      <GraduationCap className={colors.text} size={28} />
                    )}
                  </div>
                  <ExternalLink className="text-slate-600 group-hover:text-white transition-colors" size={20} />
                </div>

                <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                  {partner.type}
                </span>
                
                <h3 className="text-2xl font-display font-bold mt-2 mb-3 group-hover:text-white transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-slate-400 mb-4">{partner.description}</p>
                
                <div className={`px-4 py-2 rounded-lg ${colors.bg} border ${colors.border} text-sm`}>
                  <span className="text-slate-300">{partner.role}</span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Хотите стать партнёром программы?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Связаться с нами
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
