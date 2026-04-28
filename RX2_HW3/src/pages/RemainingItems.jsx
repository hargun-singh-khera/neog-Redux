import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchInventoryItems, fetchRemovedItems } from '../actions'
import { useEffect } from 'react'

const RemainingItems = () => {
    const dispatch = useDispatch()
    const inventoryItems = useSelector(state => state.inventoryItems)
    const removedItems = useSelector(state => state.removedItems)
    const remainingItems = inventoryItems.length - removedItems.length

    useEffect(() => {
        dispatch(fetchInventoryItems())
        dispatch(fetchRemovedItems())
    }, [])

    return (
        <div>
            <h1>Remaining Items in Inventory</h1>
            <h2>Inventory Total: {remainingItems}</h2>
        </div>
    )
}

export default RemainingItems