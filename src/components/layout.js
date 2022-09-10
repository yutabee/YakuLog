// src/components/layout.js
import React from "react"
import "../styles/layout.css"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout