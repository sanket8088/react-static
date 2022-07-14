import React from "react"
import ReactLogo from "../../assets/react.svg"
import "./Header.css"

export default function Header(){
    return <header className="header">
        <nav className="nav">
            <section className="nav-left">
                <img src = {ReactLogo} className="react-logo"/>
                ReactFacts
            </section>

            <section className="nav-right">
                React Course - Project 1
            </section>
        </nav>
    </header>
}