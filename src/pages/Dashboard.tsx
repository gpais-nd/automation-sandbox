import { useState } from 'react'
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Calendar } from 'lucide-react'

interface ChartData {
  label: string
  value: number
  color: string
}

interface MetricCard {
  title: string
  value: string
  change: number
  icon: React.ReactNode
}

export function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month')
  const [selectedChart, setSelectedChart] = useState<'sales' | 'users' | 'revenue'>('sales')

  const metrics: MetricCard[] = [
    {
      title: 'Total Sales',
      value: '$12,345',
      change: 12.5,
      icon: <DollarSign size={24} />
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: -2.3,
      icon: <Users size={24} />
    },
    {
      title: 'Conversion Rate',
      value: '3.45%',
      change: 8.1,
      icon: <TrendingUp size={24} />
    },
    {
      title: 'Page Views',
      value: '45,678',
      change: 15.2,
      icon: <Activity size={24} />
    }
  ]

  const chartData: Record<string, ChartData[]> = {
    sales: [
      { label: 'Jan', value: 65, color: 'bg-blue-500' },
      { label: 'Feb', value: 78, color: 'bg-blue-500' },
      { label: 'Mar', value: 90, color: 'bg-blue-500' },
      { label: 'Apr', value: 45, color: 'bg-blue-500' },
      { label: 'May', value: 88, color: 'bg-blue-500' },
      { label: 'Jun', value: 95, color: 'bg-blue-500' },
    ],
    users: [
      { label: 'Jan', value: 45, color: 'bg-green-500' },
      { label: 'Feb', value: 52, color: 'bg-green-500' },
      { label: 'Mar', value: 68, color: 'bg-green-500' },
      { label: 'Apr', value: 73, color: 'bg-green-500' },
      { label: 'May', value: 81, color: 'bg-green-500' },
      { label: 'Jun', value: 76, color: 'bg-green-500' },
    ],
    revenue: [
      { label: 'Jan', value: 85, color: 'bg-purple-500' },
      { label: 'Feb', value: 72, color: 'bg-purple-500' },
      { label: 'Mar', value: 95, color: 'bg-purple-500' },
      { label: 'Apr', value: 68, color: 'bg-purple-500' },
      { label: 'May', value: 92, color: 'bg-purple-500' },
      { label: 'Jun', value: 88, color: 'bg-purple-500' },
    ]
  }

  const getMaxValue = (data: ChartData[]) => Math.max(...data.map(d => d.value))

  return (
    <div className="max-w-6xl mx-auto" data-testid="dashboard-page">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 size={24} />
            Analytics Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as any)}
              className="px-3 py-1 border rounded-md text-sm"
              data-testid="period-select"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-testid="metrics-grid">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border p-6"
            data-testid={`metric-card-${index}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-gray-600">{metric.icon}</div>
              <div className={`text-sm font-medium ${
                metric.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`} data-testid={`metric-change-${index}`}>
                {metric.change >= 0 ? '+' : ''}{metric.change}%
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900" data-testid={`metric-value-${index}`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600" data-testid={`metric-title-${index}`}>
                {metric.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Performance Chart</h2>
          <div className="flex gap-2">
            {(['sales', 'users', 'revenue'] as const).map((chart) => (
              <button
                key={chart}
                onClick={() => setSelectedChart(chart)}
                className={`px-3 py-1 text-sm rounded-md capitalize ${
                  selectedChart === chart
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                data-testid={`chart-tab-${chart}`}
              >
                {chart}
              </button>
            ))}
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div className="space-y-4" data-testid="chart-container">
          <div className="flex items-end justify-between h-64 px-4" data-testid="bar-chart">
            {chartData[selectedChart].map((item, index) => {
              const height = (item.value / getMaxValue(chartData[selectedChart])) * 100
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="text-xs text-gray-600" data-testid={`bar-value-${index}`}>
                    {item.value}
                  </div>
                  <div
                    className={`w-12 ${item.color} rounded-t-md transition-all duration-300`}
                    style={{ height: `${height}%` }}
                    data-testid={`bar-${index}`}
                  />
                  <div className="text-xs text-gray-600" data-testid={`bar-label-${index}`}>
                    {item.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Chart Legend */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-center gap-6" data-testid="chart-legend">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${chartData[selectedChart][0]?.color}`} />
              <span className="text-sm text-gray-600 capitalize">{selectedChart} Data</span>
            </div>
            <div className="text-sm text-gray-500">
              Period: {selectedPeriod}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border p-6" data-testid="summary-section">
        <h2 className="text-lg font-medium mb-4">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600" data-testid="total-data-points">
              {chartData[selectedChart].length}
            </div>
            <div className="text-sm text-gray-600">Data Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600" data-testid="average-value">
              {Math.round(chartData[selectedChart].reduce((sum, item) => sum + item.value, 0) / chartData[selectedChart].length)}
            </div>
            <div className="text-sm text-gray-600">Average Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600" data-testid="max-value">
              {getMaxValue(chartData[selectedChart])}
            </div>
            <div className="text-sm text-gray-600">Peak Value</div>
          </div>
        </div>
      </div>
    </div>
  )
}