import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([])
  const [search, setSearch] = useState('')

  const filteredPlants = plantData.filter(plant => {
    return plant.name.includes(search)
  })

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then( res => res.json() )
      .then( (data) => setPlantData(data) )
  }, [])

  function addPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlant)
      })
      .then( res => res.json() )
      .then( data => setPlantData( [ ...plantData, data ] ) )
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plantData={filteredPlants} />
    </main>
  );
}

export default PlantPage;
