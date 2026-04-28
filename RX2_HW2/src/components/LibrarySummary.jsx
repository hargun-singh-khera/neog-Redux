import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeBook } from '../actions';

const LibrarySummary = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books)

    const handleRemoveBook = (isbn) => {
        dispatch(removeBook(isbn))
    }

    return (
        <div>
            <h2>Library Summary</h2>
            <p>Total Books: {books.length}</p>
            <ul>
                {books.map((book) => (
                    <li key={book.isbn}>{book.title} by {book.author} (ISBN: {book.isbn})
                        <button onClick={() => handleRemoveBook(book.isbn)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LibrarySummary