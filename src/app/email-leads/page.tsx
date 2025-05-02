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
import { Filter, RefreshCw } from "lucide-react"; // Icons for buttons

export default function EmailLeadsPage() {
  // Mock state - replace with actual data fetching
  const hasEmailLeads = false;
  const lastSynced = "less than a minute ago"; // Replace with dynamic time

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Email Leads</h1>
          <p className="text-sm text-muted-foreground">Last synced {lastSynced}</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            <RefreshCw className="mr-2 h-4 w-4" /> Check New Emails
          </Button>
        </div>
      </div>

      <div className="border rounded-lg shadow-sm bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              {/* Add sorting indicators if needed */}
              <TableHead>Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hasEmailLeads ? (
              // Map through actual email leads here
              <TableRow>
                <TableCell colSpan={6} className="text-center">Data goes here</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                  No email leads found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

