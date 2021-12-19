import dynamic from 'next/dynamic'

const MyChart = dynamic(() => import('./TradingChartDark.tsx'), { ssr: false })

export default function DynamicTVS() {
  return (
    <div className="main-chart mb15">
      <MyChart />
    </div>
  )
}
