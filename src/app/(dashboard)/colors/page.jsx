import { COLORS } from '../../../utils/colorConstants'

export default function ColorsPage() {
  const ColorCard = ({ title, colors, type = 'bg' }) => (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Object.entries(colors).map(([name, className]) => (
          <div key={name} className="text-center">
            <div 
              className={`${className} ${type === 'bg' ? 'h-12' : 'h-12 flex items-center justify-center'} rounded-lg mb-2 border`}
            >
              {type === 'text' && <span className="font-bold">Aa</span>}
            </div>
            <p className="text-xs text-gray-600 font-mono">{name}</p>
            <p className="text-xs text-gray-400 break-all">{className}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className={`text-3xl font-bold mb-2 ${COLORS.textGradients.primary}`}>
          Color Palette
        </h1>
        <p className="text-gray-600">Visual preview of all project colors</p>
      </div>

      <ColorCard title="Brand Colors" colors={COLORS.brand} />
      <ColorCard title="Status Colors" colors={COLORS.status} />
      <ColorCard title="Priority Colors" colors={COLORS.priority} />
      <ColorCard title="Neutral Colors" colors={COLORS.neutral} />
      <ColorCard title="Gradients" colors={COLORS.gradients} />
      <ColorCard title="Text Gradients" colors={COLORS.textGradients} type="text" />
      <ColorCard title="Borders" colors={COLORS.borders} />
      <ColorCard title="shadows" colors={COLORS.shadows} />
    </div>
  )
}