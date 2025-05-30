import type React from "react"
import { SidebarNav } from "@/components/admin/sidebar-nav"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <SidebarNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
