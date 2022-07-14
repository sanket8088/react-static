import React from "react"
import "./MainComponent.css"


export default function MainComponent(){
    return(<div className="main-component">
        <h1 className="component-header">Fun facts about React</h1>

        <ul>
            <li><span>Was first released in 2013</span></li>
            <li><span>Was originally created by Jordan Walke</span></li>
            <li><span>Has well over 100k starts on Github</span></li>
            <li><span>Is maintained by Facebook</span></li>
            <li><span>Power thousands of apps</span></li>
        </ul>
        </div>)
}