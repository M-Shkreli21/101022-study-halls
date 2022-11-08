import { useState } from 'react'

function Hog({ hogObject }) {

    const [hogInfo, setHogInfo] = useState(false)

    
    function handleClick() {
        setHogInfo( !hogInfo )
    }

    return (
        <div className="ui eight wide column pigTile">
            <h4>{ hogObject.name }</h4>
            <img src={hogObject.image} onClick={handleClick} />

            <div className={ hogInfo ? "show" : "hide" }>
                <p>{ hogObject.specialty }</p>
                <p>{ hogObject.greased ? "SUPER GREAZY" : "NOT THAT GREAZY :(" }</p>
                <p>Weight: { hogObject.weight }</p>
                <p>{ hogObject['highest medal achieved'] }</p>
            </div>
        </div>
    )
}

export default Hog