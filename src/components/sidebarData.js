import React from "react";
import {AiFillHome} from "react-icons/ai";
import {HiTrendingUp} from "react-icons/hi";
import {BiNews} from "react-icons/bi";
import {FaRecycle} from "react-icons/fa";
import {CiCalendarDate} from "react-icons/ci";
import {SlCalender} from "react-icons/sl";
import {AiOutlineHeart} from "react-icons/ai";
import {IoIosPeople} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io";
import picture1 from "./images/fine-gal.jpg"


export const sideBarData =[
    {
        title: "Home",
        icon: <AiFillHome />,
    },
    {
        title: "trends",
        icon: <HiTrendingUp />,
    },
    {
        title: "feeds",
        icon: <BiNews />,
    },
    
]
export const secondSideBarData =[
    {
        title: "new and notable",
        icon: <FaRecycle />,
    },
    {
        title: "release Calender",
        icon: <SlCalender/>,
    },
    {
        title: "Events",
        icon: <CiCalendarDate />,
    },
    
]

export const thirdSideBarData =[
    {
        title: "favourite songs",
        icon: <AiOutlineHeart />,
    },
    {
        title: "Artist",
        icon: <IoIosPeople/>,
    },
    {
        title: "Album",
        icon: <AiOutlineStar />,
    },
    
]

 export const footer ={
    picture: picture1,
    title: "ceptari tyes",
    icon: <IoIosArrowForward />,

}