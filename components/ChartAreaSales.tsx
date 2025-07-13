"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

import { salesData } from "@/Data/sales"

export const description = "Total order amount trend for last 20 days"

// Prepare the chart data
const chartData = salesData.data.map((entry) => ({
  date: new Date(entry.datePart).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  }),
  orderAmount: parseFloat(entry.totalOrderAmount),
}))

// Define chart configuration
const chartConfig = {
  orderAmount: {
    label: "Order Amount",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartAreaSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#2596be] dark:text-[#33d3fa]">
          Daily Sales Overview
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Last 20 days of order amounts
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, bottom: 10, left: 20, right: 20 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              minTickGap={16}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  nameKey="orderAmount"
                  indicator="line"
                  labelFormatter={(value) => `Date: ${value}`}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="orderAmount"
              stroke="var(--color-orderAmount)"
              fill="var(--color-orderAmount)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground">
              Based on recent sales data
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
