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

export const description = "Order count trend for the last 20 days"

// Prepare the chart data
const chartData = salesData.data.map((entry) => ({
  date: new Date(entry.datePart).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  }),
  orderCount: entry.orderCount,
}))

// Define chart configuration
const chartConfig = {
  orderCount: {
    label: "Order Count",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaOrderCount() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#2596be] dark:text-[#33d3fa]">
          Daily Order Count
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Last 20 days of order counts
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
                  nameKey="orderCount"
                  indicator="line"
                  labelFormatter={(value) => `Date: ${value}`}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="orderCount"
              stroke="var(--color-orderCount)"
              fill="var(--color-orderCount)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 12.4% this week
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground">
              Based on recent order activity
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
