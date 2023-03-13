import React from "react";
import{IoIosArrowRoundForward} from "react-icons/io";
import {IoIosArrowRoundBack} from "react-icons/io";
import {AiOutlineSearch} from "react-icons/ai";
import picture2 from "./images/burst.png";
import songMenu from "./middleData";
import {AiOutlineHeart} from "react-icons/ai";
import {SlMusicToneAlt} from "react-icons/sl";
import {TbArrowsDiagonal} from "react-icons/tb";
import {GrPowerCycle} from "react-icons/gr";
import {AiOutlineFastBackward} from "react-icons/ai";
import {BsFillPauseCircleFill} from "react-icons/bs";
import {AiOutlineFastForward} from "react-icons/ai";
import {RxSpeakerModerate} from "react-icons/rx";
import {RxSpeakerLoud} from "react-icons/rx";
import {AiOutlineLine} from "react-icons/ai"
// import {IoChevronForward} from "react-icons/io"
import './middle.css';


function Middle (){
   
    return(
        <>
        <div className="width-checker">
        <div className="Grand-father">
            <div className="father-1">
                <div>
                <  IoIosArrowRoundBack />
                </div>
                <div>
                <IoIosArrowRoundForward />
                </div>
            </div>
            <div className="father-2">
        <AiOutlineSearch />
        <input type ="text"  tags={[]} placeholder="search for arstist,songs and ..."/>
            </div>
        </div>
        <div className="Grand-mother">
            <div className="mother-1">
                <div id="mother-1-1">
                <p>
                    What's hot
                </p>
                </div>
                <div id="mother-1-2">
                   <img src={picture2} alt="img"/>
                    </div>
            </div>
            <div className="mother-2">
                <div>
                    <h2>
                        Trending
                    </h2>
                </div>
                <div>
                    <p>
                        more
                    </p>
                 {/* <IoChevronForward /> */}
                </div>
            </div>
            <div className="mother-3">
                <p>
                   Artist
                </p>
                <h2>on top <br/>of the world</h2>
                <div className="mother-3-button">
                    <div>
                    <button>PLAY</button>
                    <button>FOLLOW</button>
                    </div>
                    <div>
                        <p>
                            monthly listeners <br/>27,000
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Grand-uncle" >
            <div className="uncle">
                <h2>
                    My playlist
                </h2>
                <p >
                    show all
                </p>
            </div>
            <table >
                <tbody  >
                    <tr className="table">
                        <th>#</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>TIme</th>
                        <th>Album</th>
                    </tr>
                    {songMenu.map((value)=>{
                        return(
                            <tr className="table-2">
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>{value.artist}</td>
                                <td>{value.time}</td>
                                <td>{value.Album}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className="Grand-auntie">
            <div >
                     <div>
                    <AiOutlineHeart />
                    </div>
                    <div>
                    <SlMusicToneAlt />
                    </div>
                    <div>
                    <TbArrowsDiagonal />
                    </div>
            </div>
            <div>
                 <div>
                    <GrPowerCycle />
                </div>
                <div>
                <AiOutlineFastBackward />
                </div>
                <div>
                    <BsFillPauseCircleFill />
                </div>
                <div>
                    <AiOutlineFastForward />
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <RxSpeakerModerate />
                </div>
                <div>
                    <AiOutlineLine />
                </div>
                <div>
                        <RxSpeakerLoud />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Middle