import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDownLeft, ArrowUpRight, Download, Filter, MoreHorizontal, Search } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">View and manage all transactions.</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search transactions..." className="w-full pl-8" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">TRX-{1000 + i}</TableCell>
                <TableCell>user{i + 1}@example.com</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {i % 2 === 0 ? (
                      <>
                        <ArrowUpRight className="mr-2 h-4 w-4 text-green-500" />
                        Deposit
                      </>
                    ) : (
                      <>
                        <ArrowDownLeft className="mr-2 h-4 w-4 text-red-500" />
                        Withdrawal
                      </>
                    )}
                  </div>
                </TableCell>
                <TableCell className={i % 2 === 0 ? "text-green-500" : "text-red-500"}>
                  {i % 2 === 0 ? "+" : "-"}${(100 + i * 25).toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    {i % 3 === 0 ? "Completed" : i % 3 === 1 ? "Pending" : "Failed"}
                  </div>
                </TableCell>
                <TableCell>{new Date().toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>250</strong> transactions
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
