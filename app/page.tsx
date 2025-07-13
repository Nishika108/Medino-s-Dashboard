"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import OrderMetricsGrid from "@/components/OrderMetricsGrid"
import RetailerPharmacyDataGrid from "@/components/RetailerPharmacyMetrics"
import { OrderStatusChart } from "@/components/OrderStatusChart"
import { ChartBarStackedOrders } from "@/components/ChartBarStackedOrders"
import { ChartAreaSales } from "@/components/ChartAreaSales"
import { ChartAreaOrderCount } from "@/components/ChartAreaOrderCount"
import WarehouseGrid from "@/components/WarehouseGrid"
import UserRolePieChart from "@/components/UserRolePieChart"
import { usersData } from "@/Data/users"

export default function Home() {
  const [showOrderMetrics, setShowOrderMetrics] = useState(true)
  const [showRetailerPharmacy, setShowRetailerPharmacy] = useState(true)
  const [ShowWareALL, setShowWareALL] = useState(true)
  const [showOrderStatusChart, setshowOrderStatusChart] = useState(true)
  const [showChartBarStackedOrders, setshowChartBarStackedOrders] = useState(true)
  const [showChartAreaSales, setShowChartAreaSales] = useState(true)
  const [ShowChartAreaOrderCount, setShowChartAreaOrderCount] = useState(true)
  const [showUserRoleChart, setShowUserRoleChart] = useState(true)
  const [showAdminRoleChart, setShowAdminRoleChart] = useState(true)

  const { userByRole, adminsByRole } = usersData.data

  return (
    <div className="flex flex-col w-full min-h-screen dark:bg-[#121212] bg-[#f4f8fb]">
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
        {/* Order Metrics Section */}
        <section className="mt-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Order Metrics</h1>
            <button onClick={() => setShowOrderMetrics((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showOrderMetrics ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showOrderMetrics && <OrderMetricsGrid />}
        </section>

        {/* Order Status Chart */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Order Analysis</h1>
            <button onClick={() => setshowOrderStatusChart((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showOrderStatusChart ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showOrderStatusChart && <OrderStatusChart />}
        </section>

        {/* Financial Chart */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Financial Analysis</h1>
            <button onClick={() => setshowChartBarStackedOrders((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showChartBarStackedOrders ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showChartBarStackedOrders && <ChartBarStackedOrders />}
        </section>

        {/* Retailer & Pharmacy */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Retailer & Pharmacy Metrics</h1>
            <button onClick={() => setShowRetailerPharmacy((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showRetailerPharmacy ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showRetailerPharmacy && <RetailerPharmacyDataGrid />}
        </section>

        {/* Warehouse */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Warehouse Metrics</h1>
            <button onClick={() => setShowWareALL((prev) => !prev)} className="hover:text-[#2596be] transition">
              {ShowWareALL ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {ShowWareALL && <WarehouseGrid />}
        </section>

        {/* Sales Chart */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Sales Chart</h1>
            <button onClick={() => setShowChartAreaSales((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showChartAreaSales ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showChartAreaSales && <ChartAreaSales />}
        </section>

        {/* Order Count Chart */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Order Count Chart</h1>
            <button onClick={() => setShowChartAreaOrderCount((prev) => !prev)} className="hover:text-[#2596be] transition">
              {ShowChartAreaOrderCount ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {ShowChartAreaOrderCount && <ChartAreaOrderCount />}
        </section>

        {/* User Role Pie Chart */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">User Roles Distribution</h1>
            <button onClick={() => setShowUserRoleChart((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showUserRoleChart ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showUserRoleChart && (
            <UserRolePieChart title="User Roles Distribution" data={userByRole} />
          )}
        </section>

        {/* Admin Role Pie Chart */}
        <section className="mt-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Admin Roles Distribution</h1>
            <button onClick={() => setShowAdminRoleChart((prev) => !prev)} className="hover:text-[#2596be] transition">
              {showAdminRoleChart ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {showAdminRoleChart && (
            <UserRolePieChart title="Admin Roles Distribution" data={adminsByRole} />
          )}
        </section>
      </main>
    </div>
  )
}
