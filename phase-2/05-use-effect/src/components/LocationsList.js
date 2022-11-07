import { useState } from 'react'
import LocationCard from './LocationCard'
import LocationForm from './LocationForm'

const exampleLocation = [
  {
    id: 1,
    name: 'Trinidad',
    description: 'An island in the Carribean',
    image: 'https://deih43ym53wif.cloudfront.net/trinidad-tobago-coast-parlatuvier-bay-shutterstock_597815615_bcca728dbf.jpeg'
  }
]

function LocationsList() {

  // STATE //
  const [locations, setLocations] = useState(exampleLocation)

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

      <LocationForm />

      { mappedLocations }

    </div>
  )

}

export default LocationsList
