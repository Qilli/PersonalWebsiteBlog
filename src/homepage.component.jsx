import React from "react"

import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">GAME DEVELOPMENT</h1>
                    <span className="subtitle">category</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">GENERAL</h1>
                    <span className="subtitle">category</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">REACT/NATIVE</h1>
                    <span className="subtitle">category</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ABOUT ME</h1>
                    <span className="subtitle">category</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;