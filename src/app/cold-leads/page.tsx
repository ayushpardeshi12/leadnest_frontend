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
import { Mail, MessageSquare, FileText, CheckCircle } from "lucide-react"; // Icons for buttons

// Mock data for demonstration
const coldLeads = [
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    phone: "+1 (555) 876-5432",
    company: "Retail Revolution",
    designation: "Operations Manager",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    company: "Data Dynamics",
    designation: "CEO",
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 987-6543",
    company: "Innovate Inc",
    designation: "Marketing Director",
  },
];

export default function ColdLeadsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Cold Leads</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Send AI Emails
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            <MessageSquare className="mr-2 h-4 w-4" /> Send WhatsApp Messages
          </Button>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm bg-white">
        <div className="p-4">
          <Input
            type="search"
            placeholder="Search leads..."
            className="w-full md:w-1/3"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coldLeads.map((lead) => (
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
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-1 h-3 w-3" /> Notes
                  </Button>
                  <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                    <CheckCircle className="mr-1 h-3 w-3" /> Mark Active
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

