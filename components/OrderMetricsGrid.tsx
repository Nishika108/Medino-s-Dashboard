"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  PackageCheck,
  IndianRupee,
  CreditCard,
  Percent,
} from "lucide-react"
import { ordersData } from "@/Data/orders"

const metrics = [
  { label: "Orders", key: "count", isAmount: false, icon: PackageCheck },
  { label: "Sales", key: "orderAmount", isAmount: true, icon: IndianRupee },
  { label: "Gateway Amount", key: "gatewayAmount", isAmount: true, icon: CreditCard },
  { label: "Platform Fee", key: "platformFee", isAmount: true, icon: Percent },
]

const OrderRow = ({ title, data }: { title: string; data: any }) => {
  return (
    <div className="w-full px-4 sm:px-6 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#2596be] dark:text-[#33d3fa]">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 w-full">
        {metrics.map((metric, index) => {
          const value = metric.isAmount
            ? data.amount?.[metric.key] ?? "0.00"
            : data[metric.key] ?? 0

          const Icon = metric.icon

          return (
            <Card
              key={index}
              className="min-h-[150px] transition-all hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {metric.label}
                  </h3>
                  <Icon className="w-5 h-5 text-[#2596be] dark:text-[#33d3fa]" />
                </div>
                <p className="text-2xl font-bold text-[#2596be] dark:text-[#33d3fa]">
                  {metric.isAmount ? `₹${value}` : value}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default function OrderMetricsGrid() {
  const { todayOrders, weeklyOrders, monthlyOrders, placedOrderCountAmount } = ordersData.data

  return (
    <div className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 mx-auto py-8">
      <OrderRow title="Today's Orders" data={todayOrders} />
      <OrderRow title="Weekly Orders" data={weeklyOrders} />
      <OrderRow title="Monthly Orders" data={monthlyOrders} />
      <OrderRow title="Total Orders" data={placedOrderCountAmount} />
    </div>
  )
}
