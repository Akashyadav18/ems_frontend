import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <div>
            <h2>Home Page</h2>
        </div>
        <div>
            <Link to={"/employees"}>Employee List</Link>
        </div>
            
        </div>
    )
}

export default Home
