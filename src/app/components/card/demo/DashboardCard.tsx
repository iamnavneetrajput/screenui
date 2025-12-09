import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/packages/Card";

export function DashboardCardDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardHeader spacing="sm" align="between">
          <div>
            <CardDescription size="xs" className="uppercase tracking-wider font-semibold">
              Total Revenue
            </CardDescription>
            <CardTitle size="2xl" className="mt-2">$847,392</CardTitle>
          </div>
          <div className="p-3 rounded-xl">
            <span className="text-3xl">💰</span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold">
              ↑ 23.5%
            </span>
            <span className="text-sm">vs last month</span>
          </div>

          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Monthly Target</span>
                <span className="text-sm font-semibold">84%</span>
              </div>

              <div className="overflow-hidden h-3 text-xs flex rounded-full">
                <div className="w-[84%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <p className="text-xs mb-1">New Customers</p>
                <p className="text-lg font-bold">1,284</p>
              </div>
              <div>
                <p className="text-xs mb-1">Transactions</p>
                <p className="text-lg font-bold">8,492</p>
              </div>
              <div>
                <p className="text-xs mb-1">Avg. Order</p>
                <p className="text-lg font-bold">$129</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
