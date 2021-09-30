import React from 'react'
import './Pickup.css'
function Pickup() {
    return (
        <div className="pickup">
            <span id="Pickup_location" className="pickup_location"> pickup locations</span>
            <span id="Drop_location" className="drop_location"> drop locations</span>
            <button  id="Pickup_button" className="button_pickup"> START PICKUP</button>
        </div>
    )
}

export default Pickup

