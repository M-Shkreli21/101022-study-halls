import { useState } from 'react'

import Filter from './Filter'
import Hog from "./Hog.js"

function DisplayedHogs({ hogsArray }) {

    const [selectedCategory, setSelectedCategory] = useState("ALL")

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value)
    }

    const filteredHogs = hogsArray.filter(hogObject => {
        if (selectedCategory === "ALL") {
            return true
        } else if (selectedCategory === "GREASED") {
            return hogObject.greased 
        } else if (selectedCategory === "UNGREASED") {
            return !hogObject.greased 
        }
    })

    const mappedHogs = filteredHogs.map( (hogObject) => {
        return <Hog key={hogObject.name} hogObject={hogObject} />
    })

    return(
        <>
            <Filter selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />

            <div className="ui grid container">


                { mappedHogs }

            </div>
        </>
    )

}

export default DisplayedHogs