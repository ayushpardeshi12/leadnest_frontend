"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Link } from "lucide-react"; // Icons

export default function SettingsPage() {
  // Mock state - replace with actual data
  const isGoogleConnected = true;
  const userEmail = "complete.anant@gmail.com";

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Account Settings</h1>

      <Tabs defaultValue="security" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
        </TabsList>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your account email and password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={userEmail} readOnly disabled />
              </div>
              <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Connections Tab */}
        <TabsContent value="connections">
          <Card>
            <CardHeader>
              <CardTitle>Google Integration</CardTitle>
              <CardDescription>Connect your Google account to access Gmail and Calendar features.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isGoogleConnected ? (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-md">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-green-800">
                    Google Account Connected. You can access Gmail and Calendar features.
                  </p>
                </div>
              ) : (
                 <div className="flex items-center space-x-2 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  {/* Add appropriate icon for disconnected state */}
                  <p className="text-sm text-yellow-800">
                    Google Account not connected.
                  </p>
                </div>
              )}
              {isGoogleConnected ? (
                <Button variant="destructive">Disconnect Google Account</Button>
              ) : (
                <Button variant="outline">
                  <Link className="mr-2 h-4 w-4" /> Connect Google Account
                </Button>
              )}
            </CardContent>
            {/* Add sections for other connections like WhatsApp if needed */}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

