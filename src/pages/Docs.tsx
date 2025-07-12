import { useState } from 'react'
import Header from '../components/Header'
import StarfieldBackground from '../components/StarfieldBackground'

type Category = '言語' | 'フレームワーク' | 'ツール'

const categories: Record<Category, Record<string, string[]>> = {
  言語: {
    'JavaScript': ['基本文法', '非同期処理', 'DOM操作'],
    'TypeScript': ['型定義', 'インターフェース', 'ジェネリクス'],
    'Python': ['標準ライブラリ', 'スクリプト例'],
    'PHP': ['サーバーサイド処理', 'セッション管理'],
  },
  フレームワーク: {
    'React': ['Hooks', '状態管理', 'コンポーネント設計'],
    'Vue': ['リアクティブ性', 'コンポーネント構造', 'Vuex'],
    'Laravel': ['ルーティング', 'ミドルウェア', 'ORM(Eloquent)'],
  },
  ツール: {
    'Docker': ['基本コマンド', 'Dockerfile', 'コンテナ管理'],
    'Git': ['操作', 'ブランチ運用', 'リモートリポジトリ'],
    'VSCode': ['拡張機能', '設定メモ'],
  },
}

export default function Docs() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null)
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  // トグル関数
  const toggleCategory = (cat: Category) => {
    if (openCategory === cat) {
      setOpenCategory(null)
      setOpenSubCategory(null)
      setSelectedItem(null)
    } else {
      setOpenCategory(cat)
      setOpenSubCategory(null)
      setSelectedItem(null)
    }
  }

  const toggleSubCategory = (subCat: string) => {
    if (openSubCategory === subCat) {
      setOpenSubCategory(null)
      setSelectedItem(null)
    } else {
      setOpenSubCategory(subCat)
      setSelectedItem(null)
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-black/60 text-white overflow-hidden">
      <StarfieldBackground />
      <Header />

      <main className="max-w-7xl mx-auto p-6 pt-20 grid grid-cols-12 gap-6 min-h-[80vh]">
        {/* 左側メニュー：カテゴリと中カテゴリ */}
        <div className="col-span-4 bg-white/10 rounded-lg backdrop-blur-md p-4 overflow-auto max-h-[70vh]">
          {/* カテゴリリスト */}
          <div className="space-y-4">
            {(Object.keys(categories) as Category[]).map((cat) => (
              <section key={cat} className="border border-white/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(cat)}
                  className="w-full text-left px-4 py-3 bg-white/20 hover:bg-white/30 flex justify-between items-center text-lg font-semibold"
                  aria-expanded={openCategory === cat}
                >
                  <span>{cat}</span>
                  <span>{openCategory === cat ? '▲' : '▼'}</span>
                </button>

                {/* 中カテゴリ */}
                {openCategory === cat && (
                  <ul className="bg-white/5">
                    {Object.keys(categories[cat]).map((subCat) => (
                      <li
                        key={subCat}
                        className={`cursor-pointer px-6 py-2 hover:bg-white/20 ${
                          openSubCategory === subCat ? 'bg-blue-700/40 font-semibold' : ''
                        }`}
                        onClick={() => toggleSubCategory(subCat)}
                      >
                        {subCat}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* 右側詳細欄 */}
        <div className="col-span-8 bg-white/10 rounded-lg backdrop-blur-md p-6 max-h-[70vh] overflow-auto">
          {openCategory && openSubCategory ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                {openCategory} &gt; {openSubCategory}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {categories[openCategory][openSubCategory].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:underline"
                    onClick={() => setSelectedItem(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* 項目詳細表示 */}
              {selectedItem && (
                <div className="mt-6 p-4 bg-black/40 rounded">
                  <h3 className="text-xl font-semibold">{selectedItem}</h3>
                  <p className="mt-2 text-gray-300">
                    {/* ここに詳細メモや説明を追加 */}
                    {selectedItem}に関するメモや説明を書いてください。
                  </p>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-400">左のメニューからカテゴリと項目を選択してください。</p>
          )}
        </div>
      </main>
    </div>
  )
}
