import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Users, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react'

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Гипотеза',
      description: 'Ростелеком формулирует продуктовую гипотезу с бизнес-контекстом и критериями успеха',
      color: 'violet',
      details: ['Описание проблемы', 'Целевая аудитория', 'Ожидаемый результат']
    },
    {
      step: '02',
      icon: Users,
      title: 'Команда',
      description: 'Формируется студенческая команда с ментором от Ростелекома и куратором от ВУЗа',
      color: 'blue',
      details: ['3-5 студентов', 'Ментор от бизнеса', 'Куратор от ВУЗа']
    },
    {
      step: '03',
      icon: Code,
      title: 'Разработка',
      description: 'Команда проводит исследование, проектирует решение и создаёт прототип',
      color: 'orange',
      details: ['Customer Development', 'Дизайн решения', 'Разработка MVP']
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Защита',
      description: 'Презентация прототипа экспертам Ростелекома с демонстрацией работающего решения',
      color: 'pink',
      details: ['Питч проекта', 'Демо продукта', 'Обратная связь']
    },
    {
      step: '05',
      icon: CheckCircle,
      title: 'Результат',
      description: 'Лучшие решения получают развитие: внедрение, стажировки, гранты на развитие',
      color: 'emerald',
      details: ['Внедрение в продукт', 'Предложение о работе', 'Рекомендации']
    }
  ]

  const colorClasses = {
    violet: { bg: 'bg-violet-500', border: 'border-violet-500/30', text: 'text-violet-400', glow: 'shadow-violet-500/20' },
    blue: { bg: 'bg-blue-500', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
    orange: { bg: 'bg-orange-500', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'shadow-orange-500/20' },
    pink: { bg: 'bg-pink-500', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'shadow-pink-500/20' },
    emerald: { bg: 'bg-emerald-500', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' }
  }

  return (
    <section id="process" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-violet-950/10" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Как это работает
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            От <span className="gradient-text from-violet-400 to-orange-400">гипотезы</span> до{' '}
            <span className="gradient-text from-orange-400 to-pink-400">прототипа</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Пошаговый процесс превращения бизнес-идеи в работающий продукт
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-orange-500 to-emerald-500 opacity-20" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color]
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-6 shadow-lg ${colors.glow}`}>
                    <step.icon className="text-white" size={28} />
                  </div>

                  {/* Arrow (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-6 -right-4 text-slate-600" size={24} />
                  )}

                  <div className="text-center">
                    <span className={`text-sm font-bold ${colors.text} mb-2 block`}>Шаг {step.step}</span>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className={`text-xs px-3 py-1.5 rounded-full ${colors.border} border bg-white/5 inline-block mx-1`}>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 mb-6">
            Средний цикл от получения гипотезы до защиты прототипа
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-violet-400">2-3</div>
              <div className="text-xs text-slate-400">дня хакатон</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-orange-400">2-4</div>
              <div className="text-xs text-slate-400">недели практика</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-pink-400">3-6</div>
              <div className="text-xs text-slate-400">месяцев ВКР</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
