import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState, useEffect } from 'react'

function App() {
  const [reports, setReports] = useState([{name: "Kay"}, {name: "Adam"}])

  useEffect(() => {
  }, [])

  const TestRows = () => {

    return reports.map((row, i) => {
      return (
      <TableRow key={i}>
        <TableCell>{row["name"]}</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>)
    })
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container relative shadow">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Cucumber Reports</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Completion Time</TableHead>
              <TableHead>Pass %</TableHead>
              <TableHead>Scenarios</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TestRows/>
          </TableBody>
        </Table>
      </div>
    </ThemeProvider>
  )
}

export default App


