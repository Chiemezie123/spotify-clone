import React from "react";
import '../App.css';
import { sideBarData } from "./sidebarData";
import {secondSideBarData} from "./sidebarData";
import {thirdSideBarData} from "./sidebarData";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {footer} from "./sidebarData"

function Sidebar (){

return(
    <>
    <div className="sidebar">
       <div className="first-logo">
        <div id>
            <AiOutlineMenuUnfold />
        </div>
       </div>

       <div className="bee-music-div">
       <div id="bee-music-logo"><AiOutlineMenuUnfold /></div>
        <h2><span id="logo-text">Fuzzy</span>Music</h2>
       </div>

       <div className="first-div">
        {sideBarData.map((val,key)=>{
            return(
                <li key={key}>
                    <div id="icon">
                        {val.icon}
                    </div>
                    <div id="title">
                        {val.title}
                    </div>
                </li>
            )
        })}
       </div>
       <div className="second-div">
       <h4> discover</h4>
            <div className="div-second-div">
                {secondSideBarData.map((value,key) =>{
                    return(
                       <>
                       <div className="john">
                       <div id="icon-1"> {value.icon}</div>
                        <div id="title-1">{value.title}</div>
                       </div>
                       </>

                    )
                })}
            </div>

       </div>
       <div className="third-div">
        <h4>
            your collection
        </h4>
        <div>
        {thirdSideBarData.map((value,key) =>{
                    return(
                       <>
                       <div className="john">
                       <div id="icon-1"> {value.icon}</div>
                        <div id="title-1">{value.title}</div>
                       </div>
                       </>

                    )
                })}
        </div>
       </div>
       <hr></hr>
            <div className="fourth-div">
                <div className="check">
                    <img src={footer.picture} alt="img"/>
                   <span> {footer.title}</span>
                </div>
                <div className="fish">
                    {footer.icon}
                </div>
            </div>
 </div>   
    </>
)

}

export default Sidebar
