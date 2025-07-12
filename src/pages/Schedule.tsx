import Header from '../components/Header'
import StarfieldBackground from '../components/StarfieldBackground'
import { motion, easeInOut, easeOut } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeInOut },
  },
}

export default function Schedule() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 space-y-16">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6"
        >
          <h1 className="text-3xl font-bold mb-4">スケジュール</h1>
          <p className="text-gray-300 mb-6">
            自分の予定、目標、進捗をここにまとめています。日々を見える化するためのページです。
          </p>

          <div className="space-y-4">
            <div className="border border-white/20 rounded-lg p-4 bg-white/5">
              <h2 className="text-xl font-semibold mb-1">今週の目標</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>React のコンポーネント設計を整理する</li>
                <li>Bubble 表現を改善しツールチップを追加する</li>
                <li>1記事ブログを書き上げる</li>
              </ul>
            </div>

            <div className="border border-white/20 rounded-lg p-4 bg-white/5">
              <h2 className="text-xl font-semibold mb-1">近日の予定</h2>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>📅 未定</li>

              </ul>
            </div>

            <div className="border border-white/20 rounded-lg p-4 bg-white/5">
              <h2 className="text-xl font-semibold mb-1">長期ビジョン</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                学習・創作の軌跡を残すことで、自分自身の変化を可視化し、思索をより深められる場を作っていきたいと考えています。
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
