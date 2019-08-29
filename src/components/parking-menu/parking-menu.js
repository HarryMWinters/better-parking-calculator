import React from 'react';
import './parking-menu.css'

function parkingMenu(props){
    const menu = props.parkingInfo
    const parkingTypes = Object.keys(menu)
    
    return (
        <div className="ParkingMenu">
            <h3>Parking Options</h3>
            {parkingTypes.map( (pType) => _makeCatagory(pType, menu))}
        </div>
    )
}

function _makeCatagory(catagoryName, catagoryObject){
    let priceCats = Object.keys(catagoryObject[catagoryName])
    return (
        <div>
            <h4>{catagoryName}</h4>
            {priceCats.map((cat)=>(
                <div className="PriceList">{cat}: ${catagoryObject[catagoryName][cat]}.00</div>
            ))}
        </div>
    )   
}
export default parkingMenu;