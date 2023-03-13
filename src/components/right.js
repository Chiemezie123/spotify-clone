import React from "react";
import './right.css';
import picture3 from "./images/guitar.png";
import picture4 from "./images/piano.png";
import picture5 from "./images/snow.png";
import picture6 from "./images/star.png";
import picture7 from "./images/jazz.png";
import singer from "./rightData";


function right (){
    return(
        <div className="right">
            <div>
                <h2>
                    Shortcut
                </h2> 
                <div className="grid-template">
                    <div className="a">
                        <img src={picture5} />
                        <p>chilled hits</p>
                    </div>
                    <div className="b">
                    <img src={picture6} />
                        <p>hop</p>
                    </div>
                    <div className="c">
                    <img src={picture3} />
                        <p>
                            accoustic
                        </p>
                    </div>
                    <div className="d">
                    <img src={picture5} />
                        <p>
                            indie pop
                        </p>
                    </div >
                    <div className="e">
                    <img src={picture4} />
                        <p>
                            paino blues
                        </p>
                    </div>
                    <div className="f">
                    <img src={picture7} />
                        <p>
                            jazz
                        </p>
                    </div>
                </div>
                <div>
                    <h3>
                        fav artist
                    </h3>
                    <div>
                        {singer.map((val)=>{
                            return(
                               <>
                                <div>
                                <div className="right-1"> 
                                    <img src={val.img}/>
                                    </div>
                                    <div className="right-1-jnr">
                                        {val.artist}
                                        {val.views}
                                    </div>
                                    <div>
                                        {val.icon}
                                    </div>
                                </div>
                               </>
                                
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default right