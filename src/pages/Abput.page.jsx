import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AboutPage() {
  const { id }= useParams();
  const [posts, setPosts] = useState([])  
  const [loading, setLoading] = useState(true)


  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json()
      setPosts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    if(id){
      fetchData()
    }
  } ,[id])

  return (
    <div>
        <h1>About.page</h1>
        <p>About page content {loading && <strong>Loadding...</strong>}</p>
        <code>
          <pre>
            {JSON.stringify(posts, null, 2)}
          </pre>
        </code>
    </div>
  )
}
