"use client";

import { useState, useEffect } from "react";
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
import { PlusCircle, FileText, Calendar, ArrowDownCircle, Loader2 } from "lucide-react"; // Icons

// Define the type for a lead
interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  designation?: string | null;
  // Add other fields as needed based on your Supabase schema
}

// Define the backend API URL (replace with the actual exposed URL)
const BACKEND_URL = "http://5000-i87xo3h16skw08rkoxic2-b2fcf0e7.manus.computer";

export default function ActiveLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BACKEND_URL}/leads/active`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLeads(data || []); // Ensure data is an array
      } catch (e: any) {
        console.error("Failed to fetch leads:", e);
        setError(`Failed to load leads: ${e.message}`);
        setLeads([]); // Clear leads on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []); // Empty dependency array means this runs once on mount

  // --- Action Handlers (Placeholders - Implement API calls) --- 
  const handleAddNotes = (leadId: string) => {
    console.log(`Add notes for lead: ${leadId}`);
    // TODO: Implement modal/form and API call to POST /leads/<lead_id>/notes
    alert("Add Notes functionality not yet implemented.");
  };

  const handleSchedule = (leadId: string) => {
    console.log(`Schedule meeting for lead: ${leadId}`);
    // TODO: Implement modal/form for date/time and API call to POST /leads/<lead_id>/schedule
    alert("Schedule functionality not yet implemented.");
  };

  const handleMarkCold = async (leadId: string) => {
    console.log(`Mark cold lead: ${leadId}`);
    // Confirmation dialog?
    if (!confirm("Are you sure you want to mark this lead as cold?")) {
      return;
    }
    try {
      const response = await fetch(`${BACKEND_URL}/leads/${leadId}/mark_cold`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Refresh leads list after marking cold
      setLeads(leads.filter(lead => lead.id !== leadId));
      alert("Lead marked as cold successfully.");
    } catch (e: any) {
      console.error("Failed to mark lead as cold:", e);
      alert(`Failed to mark lead as cold: ${e.message}`);
    }
  };
  
  const handleNewLead = () => {
      console.log("New Lead button clicked");
      // TODO: Implement modal/form for creating a new lead
      alert("New Lead functionality not yet implemented.");
  };

  // Filter leads based on search term
  const filteredLeads = leads.filter(lead => 
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Active Leads</h1>
        <Button className="bg-black text-white hover:bg-gray-800" onClick={handleNewLead}>
          <PlusCircle className="mr-2 h-4 w-4" /> New Lead
        </Button>
      </div>

      <div className="border rounded-lg shadow-sm bg-white">
        <div className="p-4">
          <Input
            type="search"
            placeholder="Search leads..."
            className="w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {isLoading && (
          <div className="flex justify-center items-center p-10">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            <span className="ml-2 text-gray-500">Loading leads...</span>
          </div>
        )}
        
        {error && (
           <div className="flex justify-center items-center p-10 text-red-600">
             {error}
           </div>
        )}

        {!isLoading && !error && (
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
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">{lead.name || "-"}</TableCell>
                    <TableCell>
                      <div>{lead.email || "-"}</div>
                      <div className="text-sm text-muted-foreground">{lead.phone || "-"}</div>
                    </TableCell>
                    <TableCell>
                      <div>{lead.company || "-"}</div>
                      <div className="text-sm text-muted-foreground">{lead.designation || "-"}</div>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleAddNotes(lead.id)}>
                        <FileText className="mr-1 h-3 w-3" /> Notes
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleSchedule(lead.id)}>
                        <Calendar className="mr-1 h-3 w-3" /> Schedule
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 hover:text-red-700" 
                        onClick={() => handleMarkCold(lead.id)}
                      >
                        <ArrowDownCircle className="mr-1 h-3 w-3" /> Mark Cold
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                 <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                      No active leads found.
                    </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        )}
        {/* Add Pagination controls here if needed */}
      </div>
    </div>
  );
}

