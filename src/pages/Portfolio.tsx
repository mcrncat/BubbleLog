import Header from '../components/Header'
import StarfieldBackground from '../components/StarfieldBackground'

type Project = {
  title: string
  purpose: string
  techStack: string[]
  period: string
  url?: string
  image?: string
  description?: string
}

const projects: Project[] = [
  {
    title: 'ポートフォリオサイト（ここのサイト）',
    purpose: '自己紹介と作品紹介のためのWebサイト',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    period: '2025年6月〜7月',
    url: 'https://yourportfolio.example.com',
    image: '/assets/portfolio/portfolio-screenshot.png',
    description: 'レスポンシブデザイン対応。バブルのアニメーションや星空背景の演出を実装。',
  },
  // {
  //   title: 'Todoアプリ',
  //   purpose: 'タスク管理の学習用アプリ',
  //   techStack: ['React', 'JavaScript', 'Firebase'],
  //   period: '2024年12月',
  //   url: 'https://todoapp.example.com',
  //   image: '/assets/portfolio/todo-screenshot.png',
  //   description: 'リアルタイムデータ同期と認証機能を備えたTodoアプリ。',
  // },
  // {
  //   title: '技術ブログ',
  //   purpose: '技術的な学習メモの公開',
  //   techStack: ['Next.js', 'Markdown', 'Vercel'],
  //   period: '2025年1月〜',
  //   url: 'https://techblog.example.com',
  //   image: '/assets/portfolio/blog-screenshot.png',
  //   description: 'Markdownで書いた記事を高速に表示し、SEO対策も実施。',
  // },
]

export default function Portfolio() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-auto">
      <StarfieldBackground />
      <Header />

      <main className="max-w-6xl mx-auto p-6 pt-20">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-md shadow-lg flex flex-col"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title}のスクリーンショット`}
                  className="rounded mb-4 object-cover h-48 w-full"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-2">{project.purpose}</p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>期間:</strong> {project.period}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>使用技術:</strong> {project.techStack.join(', ')}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mb-2"
                >
                  プロジェクトURLを見る
                </a>
              )}
              {project.description && (
                <p className="text-gray-300 mt-auto">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
