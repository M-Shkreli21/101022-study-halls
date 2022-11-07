import { useState } from 'react'

function LocationForm() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        onChange={e => setName(e.target.value)}
        value={name}
        placeholder="name"
      />

      <input
        type="text"
        onChange={e => setDescription(e.target.value)}
        value={description}
        placeholder="description"
      />

      <input
        type="text"
        onChange={e => setImage(e.target.value)}
        value={image}
        placeholder="image"
      />

      <input type="submit" value="Add New Destination" />

    </form>
  )

}

export default LocationForm
