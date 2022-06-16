import React from "react"
import Top from "./components/Top"
import Main from "./components/Main"
import Bottom from "./components/Bottom"
import "./style.css"

export default function App(){
    return (
        <div className="container">      
            <Top />
            <Main />
            <Bottom />
        </div>
    )
}
