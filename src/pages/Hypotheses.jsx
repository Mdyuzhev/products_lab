import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Clock, Users, Tag, ArrowRight, Lock } from 'lucide-react'

export default function Hypotheses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const hypotheses = [
    {
      id: 'HYP-001',
      title: 'AI-ассистент для техподдержки',
      domain: 'Искусственный интеллект',
      complexity: 'Высокая',
      team: '4-5 человек',
      duration: '4 недели',
      status: 'open',
      tags: ['NLP', 'ChatBot', 'B2B']
    },
    {
      id: 'HYP-002',
      title: 'Мобильное приложение лояльности',
      domain: 'Mobile Development',
      complexity: 'Средняя',
      team: '3-4 человека',
      duration: '3 недели',
      status: 'open',
      tags: ['React Native', 'UX/UI', 'B2C']
    },
    {
      id: 'HYP-003',
      title: 'Дашборд аналитики качества',
      domain: 'Data Analytics',
      complexity: 'Средняя',
      team: '3-4 человека',
      duration: '2 недели',
      status: 'in_progress',
      tags: ['Visualization', 'Metrics', 'QA']
    },
    {
      id: 'HYP-004',
      title: 'IoT-мониторинг оборудования',
      domain: 'Internet of Things',
      complexity: 'Высокая',
      team: '4-5 человек',
      duration: '4 недели',
      status: 'coming',
      tags: ['Sensors', 'Real-time', 'ML']
    }
  ]

  const statusConfig = {
    open: { label: 'Открыта', color: 'emerald', icon: '🟢' },
    in_progress: { label: 'В работе', color: 'orange', icon: '🟠' },
    coming: { label: 'Скоро', color: 'slate', icon: '⏳' }
  }

  return (
    <section id="hypotheses" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-orange-950/10 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Каталог
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Продуктовые{' '}
            <span className="gradient-text from-violet-400 to-orange-400">гипотезы</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Актуальные задачи от Ростелекома, ожидающие своих исследователей
          </p>
        </motion.div>

        {/* Filters placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Все', 'AI/ML', 'Mobile', 'Web', 'IoT', 'Data'].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                i === 0 
                  ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' 
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Hypotheses grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {hypotheses.map((hyp, index) => {
            const status = statusConfig[hyp.status]
            return (
              <motion.div
                key={hyp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`group p-6 rounded-2xl glass border border-white/10 card-hover ${
                  hyp.status === 'coming' ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-500 font-mono">{hyp.id}</span>
                    <h3 className="text-xl font-semibold mt-1 group-hover:text-violet-400 transition-colors">
                      {hyp.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hyp.status === 'open' ? 'bg-emerald-500/20 text-emerald-400' :
                    hyp.status === 'in_progress' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-slate-500/20 text-slate-400'
                  }`}>
                    {status.icon} {status.label}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Lightbulb size={14} />
                    {hyp.domain}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} />
                    {hyp.team}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {hyp.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hyp.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded text-xs bg-white/5 text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm text-slate-500">
                    Сложность: <span className={hyp.complexity === 'Высокая' ? 'text-orange-400' : 'text-emerald-400'}>
                      {hyp.complexity}
                    </span>
                  </span>
                  {hyp.status === 'open' ? (
                    <button className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors">
                      Подробнее <ArrowRight size={14} />
                    </button>
                  ) : hyp.status === 'coming' ? (
                    <span className="flex items-center gap-1 text-sm text-slate-500">
                      <Lock size={14} /> Скоро
                    </span>
                  ) : (
                    <span className="text-sm text-orange-400">Команда сформирована</span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Coming soon notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 p-8 rounded-3xl glass-purple text-center"
        >
          <Lightbulb className="w-12 h-12 mx-auto mb-4 text-violet-400" />
          <h3 className="text-2xl font-semibold mb-2">Каталог пополняется</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Новые гипотезы добавляются регулярно. Подпишитесь на обновления, 
            чтобы первыми узнавать о новых задачах.
          </p>
          <button className="mt-6 btn-primary">
            Подписаться на обновления
          </button>
        </motion.div>
      </div>
    </section>
  )
}
