import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="main-header">
            <header className="main-header-container">
                <div className="header-container">
                    <div className="header-logo">
                        <a href="/">
                            <span>Shop</span>ee
                        </a>
                    </div>
                    <div className="header-menu">
                        <div className="header-menu-list">
                            <a href="/">Home</a>
                            <a href="/product">Product</a>
                            <a href="/promo">Promo</a>
                            <a href="/help">Help</a>
                        </div>
                    </div>
                </div>
            </header>
        </header>
    )
}

export default Header
