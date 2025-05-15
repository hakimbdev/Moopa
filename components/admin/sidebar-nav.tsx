import Link from "next/link"
import { BarChart3, CreditCard, FileText, Home, Settings, Users, Wallet } from "lucide-react"

export function SidebarNav() {
  return (
    <aside className="w-64 border-r bg-background hidden md:block">
      <nav className="flex flex-col gap-2 p-4">
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
          <div className="space-y-1 py-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium bg-secondary"
            >
              <Home className="h-5 w-5" />
              Overview
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <BarChart3 className="h-5 w-5" />
              Analytics
            </Link>
          </div>
        </div>
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Management</h2>
          <div className="space-y-1 py-2">
            <Link
              href="/admin/users"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <Users className="h-5 w-5" />
              Users
            </Link>
            <Link
              href="/admin/transactions"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <Wallet className="h-5 w-5" />
              Transactions
            </Link>
            <Link
              href="/admin/payments"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <CreditCard className="h-5 w-5" />
              Payments
            </Link>
            <Link
              href="/admin/reports"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <FileText className="h-5 w-5" />
              Reports
            </Link>
          </div>
        </div>
        <div className="py-2">
          <h2 className="px-4 text-lg font-semibold tracking-tight">Settings</h2>
          <div className="space-y-1 py-2">
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              <Settings className="h-5 w-5" />
              General
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  )
}
