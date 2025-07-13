"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

type RoleData = {
  role: string
  _count: number
}

const COLORS = [
  "#2596be",
  "#33d3fa",
  "#9c27b0",
  "#ff9800",
  "#4caf50",
  "#e91e63",
  "#ff5722",
  "#3f51b5",
  "#00bcd4",
  "#8bc34a",
  "#cddc39",
]

function formatRole(role: string) {
  return role.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())
}

export default function UserRolePieChart({
  title,
  data,
}: {
  title: string
  data: RoleData[]
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-[#2596be] dark:text-[#33d3fa]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[500px] p-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="_count"
              nameKey="role"
              cx="50%"
              cy="50%"
              outerRadius={160}
              label={({ role }) => formatRole(role)}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}`, "Users"]}
              labelFormatter={(label: string) => `Role: ${formatRole(label)}`}
              wrapperClassName="!text-sm"
            />
            <Legend verticalAlign="bottom" layout="horizontal" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
