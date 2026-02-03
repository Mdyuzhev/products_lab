import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Zap, Users, TrendingUp, Lightbulb, Award } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Реальные задачи',
      description: 'Работа с актуальными продуктовыми гипотезами крупной корпорации',
      color: 'violet'
    },
    {
      icon: Zap,
      title: 'Быстрый результат',
      description: 'От идеи до прототипа за 2-4 недели интенсивной работы',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Командная работа',
      description: 'Опыт работы в кросс-функциональных командах с менторами',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Фокус на продукт',
      description: 'Изучение Product Discovery и валидации гипотез на практике',
      color: 'pink'
    },
    {
      icon: TrendingUp,
      title: 'Карьерный рост',
      description: 'Возможность трудоустройства в Ростелеком для лучших участников',
      color: 'emerald'
    },
    {
      icon: Award,
      title: 'Признание',
      description: 'Портфолио с реальными проектами и рекомендации от экспертов',
      color: 'amber'
    }
  ]

  const colorClasses = {
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', icon: 'bg-violet-500/20' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', icon: 'bg-orange-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', icon: 'bg-blue-500/20' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', icon: 'bg-pink-500/20' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: 'bg-emerald-500/20' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', icon: 'bg-amber-500/20' }
  }

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            О программе
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Что такое{' '}
            <span className="gradient-text from-violet-400 to-orange-400">Products Lab</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto text-balance">
            Программа трансфера продуктовых гипотез из Ростелекома в ведущие университеты России. 
            Студенты получают реальные бизнес-задачи и создают работающие прототипы.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color]
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${colors.bg} border ${colors.border} card-hover`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                  <benefit.icon className={colors.text} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-3xl glass-purple"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold gradient-text from-violet-400 to-purple-400 mb-2">
                Хакатоны
              </div>
              <p className="text-slate-400">2-3 дня интенсивной работы над прототипом</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text from-orange-400 to-amber-400 mb-2">
                Практики
              </div>
              <p className="text-slate-400">2-4 недели глубокого погружения в продукт</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text from-pink-400 to-rose-400 mb-2">
                ВКР/Курсовые
              </div>
              <p className="text-slate-400">Полноценное исследование и разработка</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
