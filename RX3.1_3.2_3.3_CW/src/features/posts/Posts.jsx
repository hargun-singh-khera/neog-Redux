import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchPosts, likePost } from './postSlice'

const Posts = () => {
    const dispatch = useDispatch()
    const { posts, status, error } = useSelector(state => state.posts)
    console.log(posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {posts?.map(post => (
                <div key={post.postId}>
                    <p>{post.caption}</p>
                    {/* <p>Likes: {post.likes}</p> */}
                    <button onClick={() => dispatch(likePost(post.postId))}>{post.likes} Likes</button>
                </div>
            ))}
        </div>
    )
}

export default Posts