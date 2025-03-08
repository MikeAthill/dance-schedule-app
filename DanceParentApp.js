import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function DanceParentApp() {
  const [file, setFile] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleScheduleImport = () => {
    if (file) {
      // Simulate API upload
      console.log("Uploading:", file.name);
      alert("Schedule uploaded successfully!");
      // Placeholder schedule
      setSchedule([
        { time: "10:00 AM", routine: "Jazz Solo", dancer: "Emma Smith" },
        { time: "11:15 AM", routine: "Ballet Group", dancer: "Dance Inc. Team" },
      ]);
    }
  };

  const handleSetNotification = (routine) => {
    setNotifications([...notifications, routine]);
    alert(`Notification set for ${routine.routine} at ${routine.time}`);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Dance Competition Tracker</h1>
      
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-lg font-semibold">Upload Schedule</h2>
          <Input type="file" accept=".xlsx,.pdf" onChange={handleFileUpload} />
          <Button onClick={handleScheduleImport} disabled={!file}>
            <Upload className="w-4 h-4 mr-2" /> Upload
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-lg font-semibold">Performance Schedule</h2>
          {schedule.length > 0 ? (
            <div className="space-y-2">
              {schedule.map((routine, index) => (
                <div key={index} className="flex justify-between items-center border p-2 rounded-md">
                  <span>{routine.time} - {routine.routine} ({routine.dancer})</span>
                  <Button onClick={() => handleSetNotification(routine)}>Set Alert</Button>
                </div>
              ))}
            </div>
          ) : (
            <p>No schedule uploaded yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
