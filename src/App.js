// import "./App.css";
import React from "react";
import PageRoutes from "./routes/PageRoutes";
import houseImage from "./resources/images/house.jpg";
import { dummyDataContext } from "./components/contexts/ContextFile";

const propertyData = [
  {
    id: "1",
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 2,
    image: houseImage,
    price: "$350000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "2000 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 3,
    image: houseImage,
    price: "$450000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1205 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 4,
    image: houseImage,
    price: "$750000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 5,
    image: houseImage,
    price: "$12050000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 6,
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 7,
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
  {
    id: 8,
    image: houseImage,
    price: "$250000",
    houseDetails: " 3 bds | 2 ba | 1,462 sqft | House for sale",
    location: "1964 Savanna Cir, Fairfield, IA 52556",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <dummyDataContext.Provider value={propertyData}>
          <PageRoutes />
        </dummyDataContext.Provider>
      </header>
    </div>
  );
}

export default App;
