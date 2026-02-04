import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Trophy, Users, MapPin, Building2, Award, 
  Play, ArrowLeft, Sparkles, Target, Clock,
  Medal, Star, ChevronRight
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'

export default function Championship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: '730', label: 'Регистраций', icon: Users, color: 'violet' },
    { value: '100+', label: 'Команд', icon: Target, color: 'blue' },
    { value: '5', label: 'Финалистов на трек', icon: Award, color: 'orange' },
    { value: '1M₽', label: 'Призовой фонд', icon: Trophy, color: 'amber' }
  ]

  const winners = [
    {
      place: 1,
      prize: '500 000 ₽',
      teamId: '106',
      caseName: 'Wink',
      caseTitle: 'Разработка системы Performance Review для сотрудников компании',
      projectName: 'SCORE360 — система для перфоманс ревью',
      members: [
        { name: 'Припеченков Илья Михайлович', city: 'Москва' },
        { name: 'Хамикоева Ольга Руслановна', city: 'Москва' },
        { name: 'Сикорский Игорь Игоревич', city: 'Санкт-Петербург' },
        { name: 'Миронова Ольга Дмитриевна', city: 'Москва' }
      ],
      color: 'amber',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      place: 2,
      prize: '300 000 ₽',
      teamId: '108',
      caseName: 'Сигма',
      caseTitle: 'Задача по автоматической оценке ответа иностранного гражданина',
      projectName: 'Автоматизация оценки ответов',
      members: [
        { name: 'Черкасова Лидия Викторовна', city: 'Москва' },
        { name: 'Шайкина Тамара Алексеевна', city: 'Москва' },
        { name: 'Яковлев Артём Дмитриевич', city: 'Москва' },
        { name: 'Кривошапка Екатерина Георгиевна', city: 'Москва' }
      ],
      color: 'slate',
      gradient: 'from-slate-400 to-slate-500'
    },
    {
      place: 3,
      prize: '200 000 ₽',
      teamId: '5',
      caseName: 'РТК ИТ',
      caseTitle: 'Умный склад — система управления складской логистикой с использованием автономных роботов',
      projectName: 'SmartStorage — умный склад',
      members: [
        { name: 'Баркалов Вадим Вячеславович', city: 'Воронеж' },
        { name: 'Мороз Евгений Евгеньевич', city: 'Воронеж' },
        { name: 'Ена Даниэль Грамосович', city: 'Воронеж' },
        { name: 'Остряков Дмитрий Александрович', city: 'Воронеж' },
        { name: 'Новикова Наталья Андреевна', city: 'Екатеринбург' },
        { name: 'Савина Юлия Александровна', city: 'Екатеринбург' },
        { name: 'Юркова Анастасия Сергеевна', city: 'Новосибирск' }
      ],
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700',
      hasVideo: true
    }
  ]

  const cases = [
    {
      company: 'Wink',
      title: 'Система Performance Review',
      description: 'Разработка системы для оценки эффективности сотрудников с 360-градусной обратной связью, трекингом целей и аналитикой развития.',
      tags: ['HR Tech', 'Analytics', 'Web App']
    },
    {
      company: 'Сигма',
      title: 'Оценка ответов иностранных граждан',
      description: 'Автоматизация процесса оценки ответов при проверке знаний иностранных граждан с использованием NLP и машинного обучения.',
      tags: ['NLP', 'ML', 'Automation']
    },
    {
      company: 'РТК ИТ',
      title: 'Умный склад',
      description: 'Система управления складской логистикой с использованием автономных роботов, оптимизацией маршрутов и real-time мониторингом.',
      tags: ['Robotics', 'IoT', 'Logistics']
    }
  ]

  const colorClasses = {
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
    slate: { bg: 'bg-slate-500/10', border: 'border-slate-500/20', text: 'text-slate-400' }
  }

  return (
    <SmoothScroll>
      <Navbar />
      
      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 animated-gradient opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px]" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              На главную
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-300">Кейс-чемпионат 2025</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                <span className="gradient-text from-violet-400 via-purple-400 to-amber-400">
                  Расти в ИТ
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12">
                Всероссийский кейс-чемпионат от <span className="text-blue-400 font-semibold">Ростелекома</span> — 
                площадка для талантливых студентов, решающих реальные бизнес-задачи крупнейших ИТ-компаний
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const colors = colorClasses[stat.color]
                return (
                  <div key={index} className={`${colors.bg} border ${colors.border} rounded-2xl p-6 text-center`}>
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${colors.text}`} />
                    <div className={`text-3xl font-display font-bold ${colors.text}`}>{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Winners */}
        <section ref={ref} className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
                Победители
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text from-amber-400 via-yellow-400 to-orange-400">
                  Лучшие команды
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Команды, создавшие лучшие решения для реальных бизнес-задач
              </p>
            </motion.div>

            <div className="space-y-8">
              {winners.map((winner, index) => (
                <motion.div
                  key={winner.place}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  <div className={`p-8 rounded-3xl glass border ${
                    winner.place === 1 ? 'border-amber-500/30' : 
                    winner.place === 2 ? 'border-slate-400/30' : 
                    'border-orange-600/30'
                  }`}>
                    {/* Place badge */}
                    <div className={`absolute -top-4 left-8 px-6 py-2 rounded-full bg-gradient-to-r ${winner.gradient} font-bold text-white flex items-center gap-2`}>
                      {winner.place === 1 && <Trophy size={18} />}
                      {winner.place === 2 && <Medal size={18} />}
                      {winner.place === 3 && <Award size={18} />}
                      {winner.place} место — {winner.prize}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mt-4">
                      {/* Left: Case info */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-sm font-medium">
                            Кейс {winner.caseName}
                          </div>
                          <span className="text-slate-500 text-sm">Команда #{winner.teamId}</span>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">{winner.caseTitle}</h3>
                        
                        <div className="flex items-center gap-2 mb-6">
                          <Sparkles className="w-5 h-5 text-violet-400" />
                          <span className="text-violet-400 font-medium">{winner.projectName}</span>
                        </div>

                        {/* Video placeholder for 3rd place */}
                        {winner.hasVideo && (
                          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-slate-700 group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-white ml-1" />
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 text-sm text-slate-400">
                              🎬 Презентация проекта SmartStorage
                            </div>
                            {/* 
                              TODO: Заменить на реальное видео
                              <video src="/videos/SmartStorage.mp4" controls />
                              или YouTube embed:
                              <iframe src="https://www.youtube.com/embed/VIDEO_ID" />
                            */}
                          </div>
                        )}
                      </div>

                      {/* Right: Team */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Users size={20} className="text-slate-400" />
                          Команда
                        </h4>
                        <div className="grid gap-3">
                          {winner.members.map((member, i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5">
                              <span className="text-white">{member.name}</span>
                              <span className="flex items-center gap-1 text-sm text-slate-400">
                                <MapPin size={14} />
                                {member.city}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/10 to-slate-950" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                Задачи
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Кейсы от <span className="gradient-text from-blue-400 to-violet-400">Ростелекома</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Реальные бизнес-задачи от дочерних компаний Ростелекома
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass border border-white/10 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-400 font-semibold">{caseItem.company}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{caseItem.title}</h3>
                  <p className="text-slate-400 mb-4">{caseItem.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 rounded-3xl glass-purple text-center"
            >
              <Star className="w-12 h-12 mx-auto mb-6 text-amber-400" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Следующий чемпионат
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Следи за анонсами и готовься к участию в следующем сезоне «Расти в ИТ»
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#join">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Хочу участвовать
                    <ChevronRight size={20} />
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Подписаться на новости
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  )
}
