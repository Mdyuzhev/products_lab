import { motion } from 'framer-motion'
import { Github, Send, Mail, ExternalLink, Rocket } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-orange-500 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl">Products Lab</div>
                <div className="text-sm text-slate-400">Ростелеком × ВУЗы</div>
              </div>
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              Программа трансфера продуктовых гипотез из корпорации в университеты. 
              Студенты создают прототипы реальных продуктов на хакатонах и практиках.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Mdyuzhev/products_lab' },
                { Icon: Send, href: '#' },
                { Icon: Mail, href: 'mailto:contact@example.com' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-600/30 flex items-center justify-center text-slate-400 hover:text-violet-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-slate-400">
              {['О программе', 'Процесс', 'Партнёры', 'Гипотезы', 'Участие'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-violet-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Партнёры</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="https://www.company.rt.ru/" target="_blank" rel="noopener" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                  Ростелеком <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://siriusuniversity.ru/" target="_blank" rel="noopener" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                  Сириус <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.spbstu.ru/" target="_blank" rel="noopener" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                  СПбПУ Политех <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Products Lab. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
