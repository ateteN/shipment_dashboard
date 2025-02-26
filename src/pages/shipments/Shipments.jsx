import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./shipments.scss";


const initialShipments = [
  {id: "123637", status: "Shipped", currentLocation: "Cairo", destination: "Nairobi"},
  {id: "387245", status: "Shipped", currentLocation: "Lagos", destination: "Cape Town"},
  {id: "567674", status: "Shipped", currentLocation: "Accra", destination: "Dar es Salaam"},
  {id: "123546", status: "Shipped", currentLocation: "Abuja", destination: "Kigali"},
  {id: "674536", status: "Shipped", currentLocation: "Addis Ababa", destination: "Lagos"},
  {id: "467582", status: "Shipped", currentLocation: "Johannesburg", destination: "Zanzibar"},
  {id: "839373", status: "Shipped", currentLocation: "Nairobi", destination: "Accra"},
  {id: "876402", status: "Shipped", currentLocation: "Mombasa", destination: "Cairo"},
];

const Shipments = () => {
  const [shipments, setShipments] = useState(initialShipments);

  useEffect(() => {
    const updateShipmentStatus = () => {
      const newShipments = [...shipments];
      const statuses = ["Shipped", "In Transit", "Delivered", "Pending"];

      newShipments.forEach((shipment, index) => {
        if (shipment.status !== "Delivered") {
          const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

          if (randomStatus === "Delivered") {
            newShipments[index] = {
              ...shipment,
              status: randomStatus,
              currentLocation: shipment.destination, // Update current location to destination
            };
          } else {
            newShipments[index] = {
              ...shipment,
              status: randomStatus,
            };
          }
        }
      });
      setShipments(newShipments);
    };

    const interval = setInterval(updateShipmentStatus, 2000); 
    return () => clearInterval(interval); 
  }, [shipments]);

  return (
    <div className="shipment">
      <Sidebar />
      <div className="shipmentContainer">
        <Navbar />
        <div className="shipmentTable">
          <h1>Shipments</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Current Location</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment) => (
                <tr key={shipment.id}>
                  <td>{shipment.id}</td>
                  <td>
                    <span className={`status ${shipment.status.toLowerCase()}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td>{shipment.currentLocation}</td>
                  <td>{shipment.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Shipments