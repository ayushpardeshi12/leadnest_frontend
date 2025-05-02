"use client";

import { AlertCircle } from "lucide-react"; // Icon for empty state

export default function AppointmentsPage() {
  // Mock state - replace with actual data fetching
  const hasAppointments = false;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Scheduled Appointments</h1>
        {/* Optional: Add a button to schedule a new appointment if needed */}
      </div>

      <div className="border rounded-lg shadow-sm bg-white p-6 min-h-[300px] flex items-center justify-center">
        {hasAppointments ? (
          <div>
            {/* Placeholder for appointment list/calendar view */}
            <p>Appointments will be listed here.</p>
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <AlertCircle className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-lg font-medium">No appointments scheduled</h3>
            <p className="text-sm">You don't have any appointments scheduled yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

