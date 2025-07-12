import { useState } from 'react'

const categories = {
  言語: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
  フレームワーク: ['React', 'Vue', 'Laravel'],
  ツール: ['Docker', 'Git', 'VSCode'],
}

export default function Docs() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories>('言語')

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* 左カラム（大メニュー） */}
      <aside className="w-1/4 p-4 border-r border-white/20">
        <h2 className="text-xl font-bold mb-4">カテゴリ</h2>
        <ul className="space-y-2">
          {Object.keys(categories).map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer hover:text-blue-400 ${
                selectedCategory === cat ? 'font-bold text-blue-300' : ''
              }`}
              onClick={() => setSelectedCategory(cat as keyof typeof categories)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* 右カラム（中メニュー） */}
      <section className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">{selectedCategory} のメモ</h2>
        <ul className="grid grid-cols-2 gap-4">
          {categories[selectedCategory].map((item) => (
            <li
              key={item}
              className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg shadow hover:bg-white/20 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
