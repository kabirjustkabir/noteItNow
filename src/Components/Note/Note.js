import React from 'react'
import "./Note.css"
function Note(props) {
    let timer = 500,timeout;
    const formatDate = (value) => {
        if (!value) return "";
    
        const date = new Date(value);
        const monthNames = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
    
        let hrs = date.getHours();
        let amPm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
        hrs = hrs < 10 ? "0" + hrs : hrs;
    
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
    
        let day = date.getDate();
        const month = monthNames[date.getMonth()];
    
        return `${hrs}:${min} ${amPm} ${day} ${month}`;
      };
      const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
      };
    
      const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
      };
    return (
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note-text custom-scroll"
             defaultValue={props.note.text}
             onChange={(event) => updateText(event.target.value, props.note.id)}
             />
            <div className="note-footer">
                <p>{formatDate(props.note.time)}</p> 
                <i className="fa fa-trash deleteIcon"
                 style={{cursor:"pointer"}} aria-hidden="true"
                 onClick={()=>{props.deleteNote(props.note.id)}}
                 />
            </div>   
        </div>
    )
}

export default Note
