"use client"

import * as React from "react"
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
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

export const description = "Vertical interactive order chart by amount type"

const chartData = ordersData.data.ordersByStatus.map((order) => ({
    status: order.orderStatus
        .replaceAll("_", " ")
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(" "), // Full label
    orderAmount: Number(order._sum.orderAmount.toFixed(2)),
    gatewayAmount: Number(order._sum.gatewayAmount.toFixed(2)),
    platformFee: Number(order._sum.platformFee.toFixed(2)),
}))

const chartConfig = {
    orderAmount: {
        label: "Order Amount",
        color: "#2596be",
    },
    gatewayAmount: {
        label: "Gateway Amount",
        color: "#33d3fa",
    },
    platformFee: {
        label: "Platform Fee",
        color: "#94a3b8",
    },
} satisfies ChartConfig

export function ChartBarStackedOrders() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("orderAmount")

    const total = React.useMemo(
        () => ({
            orderAmount: chartData.reduce((acc, curr) => acc + curr.orderAmount, 0),
            gatewayAmount: chartData.reduce(
                (acc, curr) => acc + curr.gatewayAmount,
                0
            ),
            platformFee: chartData.reduce((acc, curr) => acc + curr.platformFee, 0),
        }),
        []
    )

    return (
        <Card className="py-0">
            <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
                    <CardTitle className="text-[#2596be] dark:text-[#33d3fa]">
                        Order Financial Breakdown
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Interactive chart by amount type
                    </CardDescription>
                </div>
                <div className="flex">
                    {Object.keys(chartConfig).map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-muted-foreground text-xs">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg leading-none font-bold sm:text-3xl">
                                    {Intl.NumberFormat("en-IN", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(total[chart])}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>

            <CardContent className="px-2 sm:px-6">
                <div className="w-full overflow-x-auto flex justify-center">
                    <ChartContainer
                        config={chartConfig}
                        className="w-full max-w-5xl h-[600px]" // Optional max-width for nicer centering
                    >
                        <BarChart
                            layout="vertical"
                            data={chartData}
                            margin={{ top: 20, right: 30, left: 40, bottom: 20 }} // reduced left margin
                            barSize={28}
                            barCategoryGap="30%"
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis type="number" tick={{ fill: "#888" }} />
                            <YAxis
                                type="category"
                                dataKey="status"
                                tick={{ fill: "#ccc", fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                                width={180}
                            />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent
                                        className="w-[160px]"
                                        nameKey={chartConfig[activeChart].label}
                                        labelFormatter={(value) => `Status: ${value}`}
                                    />
                                }
                            />
                            <Bar
                                dataKey={activeChart}
                                fill={chartConfig[activeChart].color}
                                radius={[0, 8, 8, 0]}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>
            </CardContent>


            <CardFooter className="text-sm text-muted-foreground px-6 py-2">
                Based on recent data
            </CardFooter>
        </Card>
    )
}
