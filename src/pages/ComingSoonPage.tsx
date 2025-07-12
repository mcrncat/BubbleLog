import { Link } from "react-router-dom";

export default function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">作成予定</h1>
        <p className="text-lg">このページは工事予定地です。完成まで今しばらくお待ちください。</p>
      <Link
        to="/"
        className="text-blue-400 underline hover:text-blue-600 transition"
      >
        ホームに戻る
      </Link>
      </div>
    </div>
  )
}
