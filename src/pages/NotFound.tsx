import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl mb-4">お探しのページは見つかりませんでした。</p>
      <Link
        to="/"
        className="text-blue-400 underline hover:text-blue-600 transition"
      >
        ホームに戻る
      </Link>
    </div>
  )
}
