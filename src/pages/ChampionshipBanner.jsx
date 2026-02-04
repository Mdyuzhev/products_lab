import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Trophy, Users, Award, ArrowRight, Sparkles } from 'lucide-react'

export default function ChampionshipBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    { icon: Users, value: '730', label: 'регистраций' },
    { icon: Award, value: '100+', label: 'команд' },
    { icon: Trophy, value: '1M₽', label: 'призовой фонд' }
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/30 via-violet-950/20 to-orange-950/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl glass border border-amber-500/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-300">Кейс-чемпионат 2025</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="gradient-text from-amber-400 via-yellow-400 to-orange-400">
                  Расти в ИТ
                </span>
              </h2>

              <p className="text-lg text-slate-400 mb-6">
                Всероссийский кейс-чемпионат завершён! Более 100 команд решали реальные бизнес-задачи 
                от Ростелекома. Узнай о победителях и их проектах.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{item.value}</div>
                      <div className="text-xs text-slate-400">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/championship">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-amber-500/25 transition-shadow"
                >
                  Смотреть результаты
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>

            {/* Right: Winners preview */}
            <div className="space-y-4">
              {[
                { place: '🥇', team: 'SCORE360', case: 'Wink — Performance Review', prize: '500 000 ₽' },
                { place: '🥈', team: 'Автооценка', case: 'Сигма — NLP система', prize: '300 000 ₽' },
                { place: '🥉', team: 'SmartStorage', case: 'РТК ИТ — Умный склад', prize: '200 000 ₽' }
              ].map((winner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-3xl">{winner.place}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-white flex items-center gap-2">
                      {winner.team}
                      <Sparkles className="w-4 h-4 text-violet-400" />
                    </div>
                    <div className="text-sm text-slate-400">{winner.case}</div>
                  </div>
                  <div className="text-amber-400 font-semibold">{winner.prize}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
