import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchInventoryItems } from '../actions'

const Inventory = () => {
    const dispatch = useDispatch()
    const inventoryItems = useSelector(state => state.inventoryItems)

    useEffect(() => {
        dispatch(fetchInventoryItems())
    }, [])


    return (
        <div>
            <h1>Inventory Items</h1>
            <ul>
                {inventoryItems.map((item, index) => (
                    <li key={index}>{item.itemName}: {item.itemQuantity}</li>
                ))}
            </ul>
            <h2>Total Inventory Items: {inventoryItems.length}</h2>
        </div>
    )
}

export default Inventory