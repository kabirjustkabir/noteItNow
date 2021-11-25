import React, {useState} from 'react'

import PlusIcon from "../../assets/plus.png"
import "./SideBar.css"
function SideBar(props) {
    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

    const [listOpen,setlistOpen] = useState(false)
    return (
        <div className="sidebar">
            <img src={PlusIcon} alt="add" onClick={()=>setlistOpen(!listOpen)}/>
            <ul className={`sidebar-list ${listOpen?"sidebar-list_active":""}`}>
                {
                    colors.map((item, index)=>(
                        <li
                        key={index}
                        className="sidebar-list_items"
                        style={{backgroundColor: item }}
                        onClick={()=>props.addNote(item)}
                        />
                    ))
                }
                
            </ul>
        </div>
    )
}

export default SideBar
