"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RefreshCw, RotateCcw } from "lucide-react"; // Icons for buttons

// Mock data for demonstration
const deletedLeads = [
  {
    id: "1",
    name: "David Garcia",
    email: "david.garcia@example.com",
    phone: "+1 (555) 345-6789",
    company: "Secure Systems",
    designation: "Security Officer",
    dateDeleted: "April 16th, 2025",
  },
   {
    id: "3",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    company: "Data Dynamics",
    designation: "CEO",
    dateDeleted: "April 16th, 2025",
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 987-6543",
    company: "Innovate Inc",
    designation: "Marketing Director",
    dateDeleted: "April 16th, 2025",
  },
   {
    id: "5",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    company: "Global Tech Solutions",
    designation: "CTO",
    dateDeleted: "April 16th, 2025",
  },
];

export default function DeletedLeadsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Deleted Leads</h1>
        <Button variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      <div className="border rounded-lg shadow-sm bg-white">
        <div className="p-4">
          <Input
            type="search"
            placeholder="Search deleted leads..."
            className="w-full md:w-1/3"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              {/* Add sorting indicators if needed */}
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Date Deleted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deletedLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <div>{lead.email}</div>
                  <div className="text-sm text-muted-foreground">{lead.phone}</div>
                </TableCell>
                <TableCell>
                  <div>{lead.company}</div>
                  <div className="text-sm text-muted-foreground">{lead.designation}</div>
                </TableCell>
                <TableCell>{lead.dateDeleted}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <RotateCcw className="h-4 w-4" />
                    <span className="sr-only">Restore</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Add Pagination controls here if needed */}
      </div>
    </div>
  );
}

