// Dashboard.tsx
// Displays a sample Recharts line chart as part of the portfolio's project showcase.
// Designed to be a live data visualization page (to be expanded with real data).

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 40 },
  { name: 'Apr', value: 60 },
  { name: 'May', value: 80 },
]

export default function Dashboard() {
  return (
    <div>
      <h2>Live Dashboard</h2>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#388e3c" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
