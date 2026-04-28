import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addBook } from '../actions'

const AddBookForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddBook = () => {
    dispatch(addBook(formData))
    setFormData({ title: "", author: "", isbn: "" })
  }

  return (
    <div>
      <h2>Library Management</h2>
      <input name="title" type="text" placeholder='Title' value={formData.title} onChange={handleChange} />
      <input name="author" type="text" placeholder='Author' value={formData.author} onChange={handleChange} />
      <input name="isbn" type="text" placeholder='ISBN' value={formData.isbn} onChange={handleChange} />    
      <button onClick={handleAddBook}>Add Book</button>  
    </div>
  )
}

export default AddBookForm