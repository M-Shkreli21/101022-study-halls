function LocationCard({id, name, description, image}) {

  // RENDER //
  return (
    <div className="location-card">

      <h3>{ name }</h3>

      <img src={ image } alt={ name } />

      <p>{ description }</p>

    </div>
  )

}

export default LocationCard
