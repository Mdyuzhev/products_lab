import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Building2, Briefcase, Send, CheckCircle, ArrowRight } from 'lucide-react'

export default function Join() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const audiences = [
    {
      icon: GraduationCap,
      title: 'Студентам',
      description: 'Получи реальный опыт работы над продуктами крупной корпорации',
      benefits: [
        'Работа с реальными бизнес-задачами',
        'Менторство от экспертов Ростелекома',
        'Пополнение портфолио',
        'Возможность трудоустройства'
      ],
      cta: 'Подать заявку',
      color: 'violet'
    },
    {
      icon: Building2,
      title: 'ВУЗам',
      description: 'Станьте частью экосистемы и дайте студентам практический опыт',
      benefits: [
        'Партнёрство с Ростелекомом',
        'Актуальные кейсы для обучения',
        'Повышение трудоустройства выпускников',
        'Совместные мероприятия'
      ],
      cta: 'Стать партнёром',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Менторам',
      description: 'Поделитесь опытом и помогите вырастить новое поколение продактов',
      benefits: [
        'Развитие навыков наставничества',
        'Свежий взгляд на продуктовые задачи',
        'Нетворкинг с академическим сообществом',
        'Участие в образовательных программах'
      ],
      cta: 'Стать ментором',
      color: 'orange'
    }
  ]

  const colorClasses = {
    violet: { 
      bg: 'bg-violet-500/10', 
      border: 'border-violet-500/20', 
      text: 'text-violet-400', 
      icon: 'bg-violet-500/20',
      btn: 'from-violet-600 to-purple-600 hover:shadow-violet-500/25'
    },
    blue: { 
      bg: 'bg-blue-500/10', 
      border: 'border-blue-500/20', 
      text: 'text-blue-400', 
      icon: 'bg-blue-500/20',
      btn: 'from-blue-600 to-cyan-600 hover:shadow-blue-500/25'
    },
    orange: { 
      bg: 'bg-orange-500/10', 
      border: 'border-orange-500/20', 
      text: 'text-orange-400', 
      icon: 'bg-orange-500/20',
      btn: 'from-orange-600 to-amber-600 hover:shadow-orange-500/25'
    }
  }

  return (
    <section id="join" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4">
            Присоединяйтесь
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Как{' '}
            <span className="gradient-text from-violet-400 via-pink-400 to-orange-400">участвовать</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Программа открыта для студентов, университетов и менторов из индустрии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const colors = colorClasses[audience.color]
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`p-8 rounded-3xl ${colors.bg} border ${colors.border} card-hover flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6`}>
                  <audience.icon className={colors.text} size={28} />
                </div>

                <h3 className="text-2xl font-display font-bold mb-3">{audience.title}</h3>
                <p className="text-slate-400 mb-6">{audience.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {audience.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${colors.btn} transition-shadow flex items-center justify-center gap-2`}
                >
                  {audience.cta}
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Contact form placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 p-8 md:p-12 rounded-3xl glass"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">
                Остались вопросы?
              </h3>
              <p className="text-slate-400 mb-6">
                Напишите нам, и мы расскажем подробнее о программе, 
                ближайших мероприятиях и возможностях участия.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Отвечаем в течение 24 часов
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all"
              />
              <textarea
                placeholder="Ваше сообщение"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Отправить
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
