"use client"

import { TrendingUp } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { ordersData } from "@/Data/orders"

// Prepare chart data with formatted status
const chartData = ordersData.data.ordersByStatus.map((order) => {
  const formatted = order.orderStatus
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())

  return {
    status: formatted,
    count: order._count,
  }
})

const chartConfig = {
  count: {
    label: "Total Orders",
    color: "#2596be", // default fallback
  },
} satisfies ChartConfig

export function OrderStatusChart() {
  return (
    <Card className="shadow-md border bg-white dark:bg-[#1a1a1a]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-[#2596be] dark:text-[#33d3fa]">
          Orders by Status
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Distribution of order statuses
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                type="category"
                dataKey="status"
                tickLine={false}
                axisLine={false}
                width={220}
              />
              <ChartTooltip
                cursor={{ fill: "transparent" }}
                content={<ChartTooltipContent />}
              />
              <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill="currentColor"
                    className="text-[#2596be] dark:text-[#33d3fa]"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium text-[#2596be] dark:text-[#33d3fa]">
          <TrendingUp className="h-4 w-4" />
          Status overview is trending
        </div>
        <div className="text-muted-foreground">
          Based on the most recent order data
        </div>
      </CardFooter>
    </Card>
  )
}
