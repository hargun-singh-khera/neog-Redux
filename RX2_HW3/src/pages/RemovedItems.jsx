import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchRemovedItems } from '../actions'
import { useEffect } from 'react'

const RemovedItems = () => {
    const dispatch = useDispatch()
    const removedItems = useSelector(state => state.removedItems)

    useEffect(() => {
        dispatch(fetchRemovedItems())
    }, [])

    return (
        <div>
            <h1>Removed Items</h1>
            <ul>
                {removedItems.map((item, index) => (
                    <li key={index}>{item.itemName}: {item.itemQuantity}</li>
                ))}
            </ul>
            <h2>Removed Items Total: {removedItems.length}</h2>
        </div>
    )
}

export default RemovedItems