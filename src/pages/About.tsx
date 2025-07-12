import Header from '../components/Header'
import StarfieldBackground from '../components/StarfieldBackground'
import { motion, easeInOut, easeOut } from 'framer-motion'
import avatar from '../assets/avatar.png'
import cLogo from '../assets/logos/c.svg'
import pythonLogo from '../assets/logos/python.svg'
import jsLogo from '../assets/logos/javascript.svg'
import tsLogo from '../assets/logos/typescript.svg'
import phpLogo from '../assets/logos/php.svg'
import javaLogo from '../assets/logos/java.svg'
import htmlLogo from '../assets/logos/html5.svg'
import cssLogo from '../assets/logos/css3.svg'
import reactLogo from '../assets/logos/react.svg'
import vueLogo from '../assets/logos/vuejs.svg'
import nodeLogo from '../assets/logos/nodejs.svg'
import laravelLogo from '../assets/logos/laravel.svg'
import jqueryLogo from '../assets/logos/jquery.svg'
import unityLogo from '../assets/logos/unity.svg'
import proxmoxLogo from '../assets/logos/proxmox.svg'
import linuxLogo from '../assets/logos/linux.svg'
import dockerLogo from '../assets/logos/docker.svg'
import vmwareLogo from '../assets/logos/vmware.svg'

const floatVariantsList = [
  {
    animate: {
      y: [0, -3, 0, 4, 0],
      transition: { duration: 5, ease: easeInOut, repeat: Infinity },
    },
  },
  {
    animate: {
      y: [0, -7, 0, 5, 0],
      transition: { duration: 6, ease: easeInOut, repeat: Infinity },
    },
  },
  {
    animate: {
      y: [0, -4, 0, 6, 0],
      transition: { duration: 4.5, ease: easeInOut, repeat: Infinity },
    },
  },
  {
    animate: {
      y: [0, -6, 0, 3, 0],
      transition: { duration: 5.5, ease: easeInOut, repeat: Infinity },
    },
  },
  {
    animate: {
      y: [0, -5, 0, 5, 0],
      transition: { duration: 5, ease: easeInOut, repeat: Infinity },
    },
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } },
}

function TechItem({ logo, name, description }: { logo: React.ReactNode | string; name: string; description: string }) {
  return (
    <div className="flex flex-col items-center space-y-1 text-center">
      {typeof logo === 'string' ? (
        <img src={logo} alt={`${name} logo`} className="w-12 h-12" />
      ) : (
        logo
      )}
      <div className="font-semibold">{name}</div>
      <p className="text-gray-300 text-xs">{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <StarfieldBackground />
      <Header />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-20">

        {/* このサイトについて（フル幅） */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2"
        >
          <motion.div
            variants={floatVariantsList[0]}
            animate="animate"
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-3 text-center">このサイトについて</h2>
            <p className="text-center text-gray-300 leading-relaxed">
              このサイトは、創作や学習、日々の記録、作品展示を一つにまとめたポータルです。<br />
              遊び心あるインターフェースと浮遊するUIを通じて、思考を視覚化・共有することを目指しています。
            </p>
          </motion.div>
        </motion.section>

        {/* 自己紹介と触れた技術を左カラムにまとめ、右カラムはページ構成説明 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            {/* 自己紹介 */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8"
            >
              <motion.div
                variants={floatVariantsList[1]}
                animate="animate"
                className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 grid grid-cols-1 gap-6"
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full border-2 border-white/30"
                  />
                  <h1 className="text-3xl font-bold">MCRNCAT</h1>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">プロフィール</h3>
                    <p className="text-gray-300">
                      学生です！創作・ライブ・おいしいものが大好きです。<br />
                      インフラ・セキュリティ・UI・Webに関心があります。<br />
                    </p>
                    <div className="mt-2 text-sm text-blue-300 space-y-1">
                      <p>
                        <a
                          href="https://github.com/MCRNCAT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          GitHub
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://x.com/MCRNCAT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          X (旧Twitter)
                        </a>
                      </p>
                    </div>
                    <p className='mt-2'>
                      所持資格
                      <li>応用情報</li>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* 触れた技術 */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={floatVariantsList[2]}
                animate="animate"
                className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 space-y-8"
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">触れた技術</h2>

                {/* 言語 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">言語</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <TechItem logo={cLogo} name="C" description="学校の授業で基本文法を理解" />
                    <TechItem logo={pythonLogo} name="Python" description="学校の授業で基本構文を習得" />
                    <TechItem logo={jsLogo} name="JavaScript" description="学校と趣味で基本構文を理解" />
                    <TechItem logo={tsLogo} name="TypeScript" description="趣味でReact開発に使用" />
                    <TechItem logo={phpLogo} name="PHP" description="学校で基本記述、Laravel少し扱う" />
                    <TechItem logo={javaLogo} name="Java" description="趣味でマイクラプラグイン開発" />
                    <TechItem logo={htmlLogo} name="HTML5" description="学校と趣味で使用" />
                    <TechItem logo={cssLogo} name="CSS3" description="学校と趣味で使用" />
                  </div>
                </div>

                {/* フレームワーク・ライブラリ */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">フレームワーク・ライブラリ</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <TechItem logo={reactLogo} name="React" description="趣味で使用" />
                    <TechItem logo={vueLogo} name="Vue.js" description="学校と趣味で使用" />
                    <TechItem logo={nodeLogo} name="Node.js" description="趣味で使用" />
                    <TechItem logo={laravelLogo} name="Laravel" description="趣味で少し扱う" />
                    <TechItem logo={jqueryLogo} name="jQuery" description="趣味で少し使用" />
                    <TechItem logo={unityLogo} name="Unity (C#)" description="学校で簡単なゲーム制作" />
                  </div>
                </div>

                {/* OS・仮想化 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">OS・仮想化</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <TechItem logo={linuxLogo} name="Linux" description="基本操作習得" />
                    <TechItem logo={dockerLogo} name="Docker" description="簡単なコンテナ操作" />
                    <TechItem logo={vmwareLogo} name="VMware" description="仮想環境構築に使用" />
                    <TechItem logo={proxmoxLogo} name="Proxmox" description="仮想化・コンテナ管理に興味" />
                  </div>
                </div>
              </motion.div>
            </motion.section>
          </div>
          
          <div>

          {/* 右カラム：ページ構成説明 */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <motion.div
              variants={floatVariantsList[3]}
              animate="animate"
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 mb-6"
              >
              <h2 className="text-2xl font-semibold mb-3">ページ構成と目的</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><b>Home</b>：泡型ナビゲーションと星空の演出</li>
                <li><b>Docs</b>：学習メモやノウハウの整理</li>
                <li><b>Schedule</b>：予定や目標の管理</li>
                <li><b>Portfolio</b>：制作物の展示</li>
              </ul>
            </motion.div>
          </motion.section>
          {/* 技術スタック */}
          <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               {/* 技術スタック */}
            <motion.div
              variants={floatVariantsList[3]}
              animate="animate"
              className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-3">技術スタック</h2>
              <div className="text-gray-300 space-y-4 text-sm">
                <div>
                  <h3 className="text-lg font-semibold">フロントエンド</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li><b>フレームワーク：</b>React</li>
                    <li><b>使用言語：</b>TypeScript / JavaScript</li>
                    <li><b>スタイリング：</b>Tailwind CSS</li>
                    <li><b>アニメーション：</b>Framer Motion</li>
                    <li><b>ビルドツール：</b>Vite</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">開発環境</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li><b>エディタ：</b>Visual Studio Code</li>
                    <li><b>バージョン管理：</b>Git</li>
                    <li><b>リポジトリ管理：</b>GitHub</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            </motion.section>
            </div>
        </div>

        {/* 今後の展望 */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={floatVariantsList[4]}
            animate="animate"
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-3">今後の展望</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              星や泡のように、思考や記録を浮遊させるUIをテーマに作成しています。
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>日記の記録</li>
              <li>Docsの作成</li>
              <li>UIの演出強化</li>
            </ul>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}
