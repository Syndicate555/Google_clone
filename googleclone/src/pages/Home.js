import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className ="home">
            <h1>This is Homepage</h1>
            <div className = "home__header">
            <div className = "home__headerLeft"></div>
            <div className = "home__headerRight"></div>
            </div>
            <div className = "home__body"></div>
        </div>
    )
}

export default Home
