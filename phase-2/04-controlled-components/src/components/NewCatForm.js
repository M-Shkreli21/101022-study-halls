import React, { useState } from 'react'

function NewCatForm({ handleAddCat }) {

  // STATE //

  const [catId, setCatId] = useState('')
  const [catName, setCatName] = useState('')
  const [catImage, setCatImage] = useState('')
  const [catCaption, setCatCaption] = useState('')

  // EVENT HANDLERS //
  function handleSubmit(event) {
    event.preventDefault()

    const newCatObj = {
      "id": catId,
      "name": catName,
      "image": catImage,
      "caption": catCaption
    }

    handleAddCat(newCatObj)
  }

  function handleIdChange(event) {
    setCatId(event.target.value)
  }
  
  function handleNameChange(event) {
    setCatName(event.target.value)
  }

  function handleImageChange(event) {
    setCatImage(event.target.value)
  }
  
  function handleCaptionChange(event) {
    setCatCaption(event.target.value)
  }

  function clearCaption() {
    setCatCaption('')
  }

  // RENDER //
  return (
    <form className="new-cat-form" onSubmit={handleSubmit}>

      <h2>Add A New Cat Pic</h2>

      {/* ID */}
      <label htmlFor="id">ID: </label>
      <input type="number" name="id" onChange={handleIdChange} />

      {/* NAME */}
      <label htmlFor="name">Cat Name: </label>
      <input type="text" name="name" onChange={handleNameChange} />

      {/* IMAGE */}
      <label htmlFor="image">Image URL: </label>
      <input type="text" name="image" onChange={handleImageChange} />

      {/* CAPTION */}
      <label htmlFor="caption">Caption: </label>
      <input 
        type="text" 
        name="caption" 
        onChange={handleCaptionChange}
        value={catCaption}
      />

      <button onClick={clearCaption}>Clear the caption</button>

      {/* SUBMIT BUTTON */}
      <input type="submit" value="Add Cat" />

    </form>
  )

}

export default NewCatForm
