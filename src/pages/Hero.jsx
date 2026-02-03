import { motion } from 'framer-motion'
import { ChevronDown, Lightbulb, Rocket, Users, Building2, GraduationCap, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139,92,246,.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-xl border border-violet-500/20 flex items-center justify-center"
      >
        <Lightbulb className="text-violet-400" size={32} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-500/20 flex items-center justify-center"
      >
        <Rocket className="text-orange-400" size={40} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[20%] w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-xl border border-pink-500/20 flex items-center justify-center"
      >
        <Users className="text-pink-400" size={28} />
      </motion.div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-violet-300">Новый формат сотрудничества</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <span className="gradient-text from-white via-slate-200 to-slate-400">
            Products
          </span>
          <br />
          <span className="gradient-text from-violet-400 via-purple-400 to-orange-400">
            Lab
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 text-balance"
        >
          Превращаем <span className="text-violet-400 font-semibold">продуктовые гипотезы</span> Ростелекома 
          в <span className="text-orange-400 font-semibold">рабочие прототипы</span> руками 
          талантливых студентов
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-blue-400">Ростелеком</div>
              <div className="text-xs text-slate-400">Продуктовые гипотезы</div>
            </div>
          </div>

          <div className="text-3xl text-slate-600">→</div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-violet-400">ВУЗы-партнёры</div>
              <div className="text-xs text-slate-400">Хакатоны & Практики</div>
            </div>
          </div>

          <div className="text-3xl text-slate-600">→</div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-orange-400">Прототипы</div>
              <div className="text-xs text-slate-400">MVP решений</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="btn-primary flex items-center gap-2"
          >
            Узнать больше
            <ChevronDown size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Каталог гипотез
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10+', label: 'Гипотез', color: 'from-violet-400 to-purple-400' },
            { value: '5', label: 'ВУЗов', color: 'from-blue-400 to-cyan-400' },
            { value: '100+', label: 'Студентов', color: 'from-orange-400 to-amber-400' },
            { value: '∞', label: 'Возможностей', color: 'from-pink-400 to-rose-400' },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className={`text-3xl md:text-4xl font-display font-bold gradient-text ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToAbout}
          className="w-8 h-12 rounded-full border-2 border-violet-500/30 flex items-start justify-center p-2 cursor-pointer hover:border-violet-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-violet-400/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
