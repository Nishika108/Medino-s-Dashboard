"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileClock,
  FilePlus,
  FileCheck,
  Clock8,
  BadgeCheck,
  Truck,
  PackageCheck,
} from "lucide-react"
import { retailerPharmacyData } from "@/Data/retailerPharmacy"

const metrics = [
  { label: "Prescriptions Pending", key: "prescriptionsPending", isAmount: false, icon: FileClock },
  { label: "Order By Prescription", key: "orderByPrescription", isAmount: false, icon: FilePlus },
  { label: "Approved Prescriptions", key: "approvedPrescriptions", isAmount: false, icon: FileCheck },
  { label: "Retailer Pending", key: "retailerPending", isAmount: false, icon: Clock8 },
  { label: "Retailer Confirmed", key: "retailerConfirmed", isAmount: false, icon: BadgeCheck },
  { label: "Out For Delivery", key: "outForDelivery", isAmount: false, icon: Truck },
  { label: "Delivered", key: "delivered", isAmount: false, icon: PackageCheck },
]

const OrderRow = ({ title, data }: { title: string; data: any }) => {
  return (
    <div className="w-full px-4 mb-12 @container">
      <h2 className="text-xl font-bold mb-4 text-[#2596be] dark:text-[#33d3fa]">
        {title}
      </h2>

      <div className="grid grid-cols-1 @sm:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 gap-6 w-full">
        {metrics.map((metric, index) => {
          const value = data[metric.key]
          const Icon = metric.icon

          return (
            <Card
              key={index}
              className="transition-all hover:shadow-lg hover:scale-[1.02] bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
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

export default function RetailerPharmacyDataGrid() {
  const { today, allTime } = retailerPharmacyData.data

  return (
    <div className="w-full max-w-[1600px] px-4 mx-auto py-8">
      <OrderRow title="Today" data={today} />
      <OrderRow title="All Time" data={allTime} />
    </div>
  )
}
