import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";

function App() {

  const loadedCoffees=useLoaderData()
  const [coffees,setCoffees]=useState(loadedCoffees)
  return (
    <>
  
      <h1 className="text-6xl text-purple-600">Coffee Add : {coffees.length} </h1>
      <div className="grid grid-cols-2">
        {
          coffees.map(coffee=>
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
          )
        }
      </div>
    </>
  );
}

export default App;
