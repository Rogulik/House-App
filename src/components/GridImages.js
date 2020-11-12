import React from 'react'
import logo from '../images/logo.jpg'
import '../styles/GridImages.scss'

const GridImages = () => {
    return (
        <div className = "grid-images__container">
            <div className="grid-images__pic floor">
               <img src={logo} alt="logo" className="grid-images__logo"/>
            </div>
            <div className="grid-images__pic roofer">
               
            </div>
            <div className="grid-images__pic family">
               
            </div>
            <div className="grid-images__pic hands">
                <p className="grid-images__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Maecenas volutpat blandit aliquam etiam erat velit
                  
                </p>
            </div>
        </div>
    )
}

export default GridImages
