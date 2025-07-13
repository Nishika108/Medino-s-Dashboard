"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  PackageCheck,
  PackageOpen,
  IndianRupee,
  ShieldCheck,
  Truck,
  Ban,
} from "lucide-react"
import { warehouseTodayData } from "@/Data/warehouseToday"
import { warehouseAllTimeData } from "@/Data/warehouseAllTime"

const statusIcons: Record<string, any> = {
  PENDING: PackageOpen,
  PURCHASE_ORDER: ShieldCheck,
  BILLED_FOR_STORE: IndianRupee,
  OUT_FOR_STORE: Truck,
  OUT_FOR_DELIVERY: Truck,
  DELIVERED: PackageCheck,
  REJECTED_BY_RETAILER: Ban,
}

const TotalAmountCard = ({ amount }: { amount: number }) => (
  <Card className="min-h-[150px] transition-all hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700">
    <CardContent className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Total Amount
        </h3>
        <IndianRupee className="w-5 h-5 text-[#2596be] dark:text-[#33d3fa]" />
      </div>
      <p className="text-3xl font-bold text-[#2596be] dark:text-[#33d3fa]">
        ₹{amount.toFixed(2)}
      </p>
    </CardContent>
  </Card>
)

const formatStatus = (status: string) =>
  status
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (l: string) => l.toUpperCase())

const renderSection = (
  title: string,
  data: any[],
  showTotal?: boolean,
  amount?: number
) => (
  <div className="mb-12">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#2596be] dark:text-[#33d3fa]">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 w-full">
      {data.map((metric, index) => {
        const Icon = statusIcons[metric.orderStatus] || PackageCheck
        return (
          <Card
            key={index}
            className="min-h-[150px] transition-all hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700"
          >
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 break-words">
                  {formatStatus(metric.orderStatus)}
                </h3>
                <Icon className="w-5 h-5 text-[#2596be] dark:text-[#33d3fa]" />
              </div>
              <p className="text-2xl font-bold text-[#2596be] dark:text-[#33d3fa]">
                {metric._count._all}
              </p>
            </CardContent>
          </Card>
        )
      })}
      {showTotal && amount !== undefined && <TotalAmountCard amount={amount} />}
    </div>
  </div>
)

export default function WarehouseGrid() {
  const {
    warehouseMetrices: todayMetrices,
    orderMetrics: todayOrders,
    totalAmt: todayAmt,
  } = warehouseTodayData.data

  const {
    warehouseMetrices: allMetrices,
    orderMetrics: allOrders,
    totalAmt: allTimeAmt,
  } = warehouseAllTimeData.data

  return (
    <div className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 mx-auto py-8">
      {renderSection("Today's Warehouse Metrics", todayMetrices)}
      {renderSection("Today's Order Metrics", todayOrders, true, todayAmt)}
      {renderSection("All-Time Warehouse Metrics", allMetrices)}
      {renderSection("All-Time Order Metrics", allOrders, true, allTimeAmt)}
    </div>
  )
}
