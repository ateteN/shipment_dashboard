// dashboard.js
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const mockShipments = [
  { id: 1, status: "In Transit", location: "New York", updatedAt: "2025-02-20 14:00" },
  { id: 2, status: "Delivered", location: "Los Angeles", updatedAt: "2025-02-20 13:30" },
  { id: 3, status: "Pending", location: "Chicago", updatedAt: "2025-02-20 12:45" },
];

const ShipmentsTable = ({ shipments }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-800">
          <th className="border border-gray-300 dark:border-gray-700 p-2">ID</th>
          <th className="border border-gray-300 dark:border-gray-700 p-2">Status</th>
          <th className="border border-gray-300 dark:border-gray-700 p-2">Location</th>
          <th className="border border-gray-300 dark:border-gray-700 p-2">Updated At</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment) => (
          <tr key={shipment.id} className="odd:bg-gray-100 dark:odd:bg-gray-800">
            <td className="border border-gray-300 dark:border-gray-700 p-2">{shipment.id}</td>
            <td className="border border-gray-300 dark:border-gray-700 p-2">{shipment.status}</td>
            <td className="border border-gray-300 dark:border-gray-700 p-2">{shipment.location}</td>
            <td className="border border-gray-300 dark:border-gray-700 p-2">{shipment.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Dashboard() {
  const [shipments, setShipments] = useState(mockShipments);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    
    socket.onmessage = (event) => {
      const updatedShipment = JSON.parse(event.data);
      setShipments((prev) => {
        const existingIndex = prev.findIndex(s => s.id === updatedShipment.id);
        if (existingIndex !== -1) {
          return prev.map(s => s.id === updatedShipment.id ? updatedShipment : s);
        } else {
          return [...prev, updatedShipment];
        }
      });
    };
    
    socket.onerror = (error) => console.error("WebSocket Error:", error);
    socket.onclose = () => console.log("WebSocket Disconnected");
    
    return () => socket.close();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Shipment Dashboard</h1>
          <ThemeToggle />
        </div>
        <ShipmentsTable shipments={shipments} />
      </div>
    </div>
  );
}
