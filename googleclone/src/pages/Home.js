import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className ="home">
            <div className = "home__header">
            <div className = "home__headerLeft">
            <Link to = "/about">About</Link>  
            {/* Link is better than <a></a> since it does not refresh the page, it simply redirects to the link */}
            <Link to = "/store">Store</Link>
            </div>
            <div className = "home__headerRight">
            <Link to = "/gmail">Gmail</Link>
            <Link to = "/images">Images</Link>

            </div>
            </div>
            <div className = "home__body"></div>
        </div>
    )
}

export default Home
