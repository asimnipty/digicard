import React from "react"

 export default function Bottom(){
     return(
         <div className="bottom">
            <img src= {require('../icon/twitter.png')} className = "tw"/>
            <img src= {require('../icon/fb.png')} className = "fb"/>
            <img src= {require('../icon/git.png')} className = "git"/>
            <img src= {require('../icon/ig.png')} className = "ig" />
         
         </div>
     )
 }