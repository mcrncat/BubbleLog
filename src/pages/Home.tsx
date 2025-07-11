import StarfieldBackground from '../components/StarfieldBackground'
import Header from '../components/Header'
import Bubble from '../components/Home/Bubble'
import { bubbleData } from '../data/bubbleData'

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <StarfieldBackground />

      <Header />

      <div className="absolute inset-0 z-10">
        {/* 飾りバブル・メインバブルの描画 */}
        {bubbleData.map((bubble, i) => (
          <Bubble key={i} {...bubble} />
        ))}
      </div>
    </div>
  )
}
