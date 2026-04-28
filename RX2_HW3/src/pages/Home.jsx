import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addItem, removeItem } from '../actions'

const Home = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        itemName: "",
        itemQuantity: "",
        entryType: "Add to storage"
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    } 

    const handleAddItem = (e) => {
        e.preventDefault();
        console.log("formData", { ...formData, itemQuantity: parseInt(formData.itemQuantity) })
        if (formData.entryType === "Add to storage") {
            dispatch(addItem({ ...formData, itemQuantity: parseInt(formData.itemQuantity) }))
        } else {
            dispatch(removeItem({ ...formData, itemQuantity: parseInt(formData.itemQuantity) }))
        }
        setFormData({ itemName: "", itemQuantity: "", entryType: "Add to storage" })
    }

    return (
        <div>
            <h1>Inventory Admin App</h1>
            <div>
                <label>Item Name:</label>
                <input 
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange} 
                />
            </div>
            <br />
            <div>
                <label>Item Quantity:</label>
                <input 
                    type="text" 
                    name="itemQuantity"
                    value={formData.itemQuantity}
                    onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <label>Item Name:</label>
                <select 
                    name="entryType"
                    value={formData.entryType}
                    onChange={handleChange}
                >
                    <option value="Add to storage">Add to storage</option>
                    <option value="Remove from storage">Remove from storage</option>
                </select>
            </div>
            <br />
            <button onClick={handleAddItem}>Add Item Data</button>
        </div>
    )
}

export default Home