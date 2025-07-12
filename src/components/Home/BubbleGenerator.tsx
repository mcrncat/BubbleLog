import Bubble from './Bubble'

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function BubblesField() {
  const count = 20

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        // バブルのサイズ（px）
        const size = randomRange(40, 100)
        // アニメーション持続時間（秒）
        const duration = randomRange(6, 15)
        // 開始遅延（秒）
        const delay = randomRange(0, 10)
        // 画面幅 vwの中央周辺をベースに多少ランダムな左右位置をバブル内で調整（BubbleコンポーネントのbaseLeftでさらに細かく調整）
        // ここでleftは0にしてBubble内でbaseLeft使う方針なら不要かも

        // バブルに表示するラベル（任意）
        const label = `Bubble ${i + 1}`

        return (
          <Bubble
            key={i}
            size={size}
            duration={duration}
            delay={delay}
            label={label}
            interactive={false} // 飾りだけならfalse
          />
        )
      })}
    </>
  )
}
