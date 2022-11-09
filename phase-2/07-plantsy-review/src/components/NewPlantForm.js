import React, { useState } from "react";

function NewPlantForm({ addPlant }) {

  const [formName, setFormName] = useState('')
  const [formURL, setFormURL] = useState('')
  const [formPrice, setFormPrice] = useState(0)

  function handleClearForm() {
    setFormName('')
    setFormURL('')
    setFormPrice(0)
  }

  function handleSubmit(e) {
    e.preventDefault()

    // create an object
    const newPlant = {
      price: formPrice,
      name: formName,
      image: formURL
    }

    addPlant(newPlant)
    handleClearForm()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={formName}
          onChange={(event) => setFormName(event.target.value.toUpperCase())}
          />

        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formURL}
          onChange={(event) => setFormURL(event.target.value)}
          />

        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formPrice}
          onChange={(event) => setFormPrice(parseFloat(event.target.value))}
        />

        <button type="submit">Add Plant</button>

      </form>

      <button onClick={handleClearForm}>Clear Form</button>

    </div>

  );
}

export default NewPlantForm;