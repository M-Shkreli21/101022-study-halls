import { useState, useEffect } from 'react'
import LocationCard from './LocationCard'
import LocationForm from './LocationForm'

function LocationsList() {

  // STATE //
  const [locations, setLocations] = useState([])
  
  // USEEFFECT //
  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then( res => res.json() )
      .then( data => setLocations( data ) )
  }, [])
  
  useEffect(() => {

    console.log("Locations has changed")

    return () => console.log("I am cleaning up!")

  }, [locations])

  // EVENT HANDLERS //

    async function handleAddLocation(newLocation) {

      const response =  await fetch('http://localhost:3000/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( newLocation )
      })

      const data = await response.json()
      
      const updatedLocations = [...locations, data]

      setLocations( updatedLocations )
  }

  // MAP //
  const mappedLocations = locations.map( location => (
    <LocationCard key={location.id}
      id={location.id}
      name={location.name}
      description={location.description}
      image={location.image}
    />
  ))

  // RENDER //
  return (
    <div className="locations-list">

      <LocationForm handleAddLocation={handleAddLocation} />

      { mappedLocations }

    </div>
  )

}

export default LocationsList
