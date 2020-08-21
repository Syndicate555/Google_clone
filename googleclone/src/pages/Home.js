import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from '@material-ui/core';
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
            <AppsIcon/>
            <Avatar/>

            </div>
            </div>
            <div className = "home__body">
            <img src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt = ""></img>
            <div className = "home__inputContainer">
            {/* Search */}
            </div>
            </div>
        </div>
    )
}

export default Home
